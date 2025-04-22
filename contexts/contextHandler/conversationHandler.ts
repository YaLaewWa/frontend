import { MessageInterface, User } from '@/types/ServerMessageType';

export function updateConversation(
  conversation: MessageInterface[],
  setConversation: React.Dispatch<React.SetStateAction<MessageInterface[]>>,
  payload: any,
  activeChat: User,
  sendNotRead: (chatID: string) => void
) {
  if (payload.username != activeChat?.username) {
    sendNotRead(payload.chatID);
  } else {
    setConversation([...conversation, payload]);
  }
}
