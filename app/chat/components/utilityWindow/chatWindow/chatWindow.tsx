import { MessageBox } from "@/app/chat/components/utilityWindow/chatWindow/messageBox";
import { chatMock } from "@/app/chat/mocks/chatMock";

export function ChatWindow() {
  const currentUser = "Friend0";
  const unsortedChats = chatMock.chat;
  const sortedChats: messageInterface[] = unsortedChats.sort((n1, n2) => {
    if (n1.timestamp < n2.timestamp) {
      return 1;
    } else if (n1.timestamp > n2.timestamp) {
      return -1;
    }

    return 0;
  });
  return (
    <div className="w-full">
      {sortedChats.map((message) => (
        <MessageBox
          key={currentUser + message.timestamp}
          currentUser={currentUser}
          sender={message.sender}
          timestamp={message.timestamp}
          message={message.message}
        />
      ))}
    </div>
  );
}
