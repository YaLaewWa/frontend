"use client";
import { MessageBox } from "@/app/chat/components/utilityWindow/chatWindow/messageBox";
import { SendMessageField } from "@/app/chat/components/utilityWindow/chatWindow/sendMessageField";
import { chatMock, chatMock2 } from "@/app/chat/mocks/chatMock";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useState } from "react";

interface ChatWindowProps {
  currentUser: string;
}

export function ChatWindow({ currentUser }: ChatWindowProps) {
  const myUser = "Friend0";
  const unsortedChats: messageInterface[] = chatMock.chat; //Fetch old message
  const sortedChats: messageInterface[] = unsortedChats.sort((n1, n2) => {
    if (n1.timestamp > n2.timestamp) {
      return 1;
    } else if (n1.timestamp < n2.timestamp) {
      return -1;
    }

    return 0;
  });
  const [displayChats, setDisplayChats] = useState(sortedChats);
  if (currentUser === "") {
    return (
      <div className="flex mx-auto my-auto text-gray-500">
        <p>Click your friend on the left bar to chat</p>
      </div>
    );
  } else {
    return (
      <div className="w-full h-screen">
        <ScrollArea className="h-[calc(100vh-75px)]">
          <div className="">
            {displayChats.map((message) => (
              <MessageBox
                key={myUser + message.timestamp}
                myUser={myUser}
                sender={message.sender}
                timestamp={message.timestamp}
                message={message.message}
              />
            ))}
          </div>
        </ScrollArea>
        <SendMessageField
          messageArray={displayChats}
          updateFunction={setDisplayChats}
        />
      </div>
    );
  }
}
