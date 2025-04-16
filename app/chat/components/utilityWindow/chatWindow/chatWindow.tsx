import { MessageBox } from "@/app/chat/components/utilityWindow/chatWindow/messageBox";
import { SendMessageField } from "@/app/chat/components/utilityWindow/chatWindow/sendMessageField";
import { chatMock } from "@/app/chat/mocks/chatMock";
import { ScrollArea } from "@/components/ui/scroll-area";

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
    <div className="w-full h-screen">
      <ScrollArea className="h-[calc(100vh-75px)]">
        <div className="">
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
      </ScrollArea>
      <SendMessageField />
    </div>
  );
}
