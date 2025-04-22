'use client';
import React, { createContext, useContext, useEffect, useState } from 'react';
import useWebSocket, { type ReadyState } from 'react-use-websocket';
import { useSession } from 'next-auth/react';
import {
  GroupInterface,
  MessageInterface,
  User,
  WebSocketMessage,
} from '@/types/ServerMessageType';
import { FriendBarInterface } from '@/types/ServerMessageType';
import { updateConversation } from '@/contexts/contextHandler/conversationHandler';
import {
  initOnlineUser,
  addOnlineUser,
  removeOnlineUser,
} from '@/contexts/contextHandler/onlineUserHandler';
import { fetchGroup } from '@/contexts/action/fetchGroup';
import { fetchSidebar } from '@/contexts/action/fetchSidebar';

interface WebsocketContextType {
  sendMessage: (chatID: string, content: string) => void;
  connectionStatus: ReadyState;
  groups: GroupInterface[];
  setGroups: React.Dispatch<React.SetStateAction<GroupInterface[]>>;
  sidebars: FriendBarInterface[];
  setSidebars: React.Dispatch<React.SetStateAction<FriendBarInterface[]>>;
  onlineUsers: User[];
  setOnlineUsers: React.Dispatch<React.SetStateAction<User[]>>;
  conversation: MessageInterface[];
  setConversation: React.Dispatch<React.SetStateAction<MessageInterface[]>>;
  activeChat?: string;
  setActiveChat: React.Dispatch<React.SetStateAction<string | undefined>>;
}

interface WebsocketProviderProps {
  children: React.ReactNode;
}

const WebsocketContext = createContext<WebsocketContextType | null>(null);

//For use client data
export const useWebSocketContext = () => {
  const context = useContext(WebsocketContext);

  if (!context) {
    throw new Error(
      'useWebSocketContext must be used within a WebSocketProvider'
    );
  }
  return context;
};

export function WebsocketProvider({ children }: WebsocketProviderProps) {
  const [groups, setGroups] = useState<GroupInterface[]>([]);
  const [sidebars, setSidebars] = useState<FriendBarInterface[]>([]);
  const [onlineUsers, setOnlineUsers] = useState<User[]>([]);
  const [conversation, setConversation] = useState<MessageInterface[]>([]);
  const [activeChat, setActiveChat] = useState<string>();

  const { data: session, status } = useSession();
  //Websocket connection
  const { sendJsonMessage, lastJsonMessage, readyState } = useWebSocket(
    session?.accessToken
      ? `${process.env.NEXT_PUBLIC_WEBSOCKET_URL}?token=${session.accessToken}`
      : null,
    {
      onOpen: async () => {
        console.log('connection established try to making authentication');
        if (!session) return;
        console.log(lastJsonMessage);
      },
      onClose: () => console.log('WebSocket connection closed'),
      onError: (event) => console.error('WebSocket error:', event),
      shouldReconnect: (closeEvent) => true,
      reconnectAttempts: 10,
      reconnectInterval: 3000,
    }
  );

  async function fetchAll() {
    const res = await fetchGroup();
    setGroups(res.data);
    const sidebar = await fetchSidebar();
    setSidebars(sidebar.data);
    console.log(sidebar);
  }

  //Fetch everything
  useEffect(() => {
    fetchAll();
  }, []);

  const sendMessage = (chatID: string, content: string) => {
    sendJsonMessage({
      type: 'message',
      payload: {
        chatID: chatID,
        content: content,
      },
    });
  };

  const sendNotRead = (chatID: string) => {
    sendJsonMessage({
      type: 'ignored',
      payload: {
        chatID: chatID,
      },
    });
  };

  //Handler when receiving message from server
  useEffect(() => {
    const message = lastJsonMessage as WebSocketMessage;
    if (message) {
      switch (message.type) {
        case 'message':
          updateConversation(
            conversation,
            setConversation,
            message.payload,
            activeChat ?? '',
            sendNotRead
          );
          break;
        case 'online_users':
          initOnlineUser(setOnlineUsers, message.payload);
          break;
        case 'user_login':
          addOnlineUser(onlineUsers, setOnlineUsers, message.payload);
          break;
        case 'user_logout':
          removeOnlineUser(onlineUsers, setOnlineUsers, message.payload);
          break;
      }
    }
  }, [lastJsonMessage]);
  return (
    <WebsocketContext.Provider
      value={{
        sendMessage,
        connectionStatus: readyState,
        groups,
        setGroups,
        sidebars,
        setSidebars,
        onlineUsers,
        setOnlineUsers,
        activeChat,
        setActiveChat,
        conversation,
        setConversation,
      }}
    >
      {children}
    </WebsocketContext.Provider>
  );
}
