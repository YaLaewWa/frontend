import {
  ConversationInterface,
  MessageInterface,
  User,
  WebSocketMessage,
} from '@/types/ServerMessageType';

export function updateConversation(
  conversation: ConversationInterface[],
  setConversation: React.Dispatch<
    React.SetStateAction<ConversationInterface[]>
  >,
  message: WebSocketMessage,
  activeChat: string,
  sendNotRead: (chatID: string) => void
) {
  console.log(message);
  if (message.payload.chat_id != (activeChat ?? '')) {
    sendNotRead(message.payload.chat_id);
  } else {
    setConversation([
      ...conversation,
      {
        type: message.type,
        payload: {
          create_at: message.payload.create_at,
          username: message.payload.username,
          message: message.payload.message,
        },
      },
    ]);
  }
}
