import { MessageInterface, User } from '@/types/ServerMessageType';

export function updateConversation(
  conversation: MessageInterface[],
  setConversation: React.Dispatch<React.SetStateAction<MessageInterface[]>>,
  payload: any,
  activeChat: string,
  sendNotRead: (chatID: string) => void
) {
  if (payload.chat_id != activeChat) {
    sendNotRead(payload.chat_id);
  } else {
    setConversation([...conversation, payload]);
  }
}
