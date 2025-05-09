'use client';
import React, { createContext, useContext, useEffect, useState } from 'react';
import useWebSocket, { type ReadyState } from 'react-use-websocket';
import { useSession } from 'next-auth/react';
import {
  ConversationInterface,
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
import { getChat } from '@/contexts/action/getChat';
import { fetchGroup } from '@/contexts/action/fetchGroup';
import { fetchSidebar } from '@/contexts/action/fetchSidebar';
import {
  addNewGroup,
  newJoinGroup,
} from '@/contexts/contextHandler/newGroupHandler';
import { addNewSidebar } from '@/contexts/contextHandler/sidebarHandler';

interface WebsocketContextType {
  sendMessage: (chatID: string, content: string) => void;
  connectionStatus: ReadyState;
  groups: GroupInterface[];
  setGroups: React.Dispatch<React.SetStateAction<GroupInterface[]>>;
  sidebars: FriendBarInterface[];
  setSidebars: React.Dispatch<React.SetStateAction<FriendBarInterface[]>>;
  onlineUsers: string[];
  setOnlineUsers: React.Dispatch<React.SetStateAction<string[]>>;
  conversation: ConversationInterface[];
  setConversation: React.Dispatch<
    React.SetStateAction<ConversationInterface[]>
  >;
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
  const [onlineUsers, setOnlineUsers] = useState<string[]>([]);
  const [conversation, setConversation] = useState<ConversationInterface[]>([]);
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
    if (session?.accessToken){
      fetchAll();
    }
  }, [session?.accessToken]);

  async function setOldChat() {
    const res = activeChat ? await getChat(activeChat) : [];
    setConversation(res.data ?? []);
  }

  useEffect(() => {
    setOldChat();
    if (activeChat){
      sendRead(activeChat)
    }
  }, [activeChat]);

  const sendMessage = (chatID: string, content: string) => {
    // setActiveChat("b7a882b9-8b71-451e-8aa4-67516cb90b09")
    console.log(activeChat)
    sendJsonMessage({
      type: 'message',
      payload: {
          chat_id: chatID,
          content: content,
      },
    });
  };

  const sendNotRead = (chatID: string) => {
    sendJsonMessage({
      type: 'ignore',
      payload: {
        chat_id: chatID,
      },
    });
  };

  const sendRead = (chatID: string) => {
    sendJsonMessage({
      type: 'read_chat',
      payload:{
        chat_id: chatID
      }
    })
  }

  //Handler when receiving message from server
  useEffect(() => {
    const message = lastJsonMessage as WebSocketMessage;
    if (message) {
      switch (message.type) {
        case 'message':
          updateConversation(
            conversation,
            setConversation,
            message,
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
        case 'new_group':
          addNewGroup(groups, setGroups, message.payload);
          break;
        case 'new_user_group':
          newJoinGroup(groups, setGroups, message.payload);
          break;
        case 'sidebar_update':
          addNewSidebar(setSidebars, message.payload);
      }
    }
    console.log(lastJsonMessage);
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
  );}
