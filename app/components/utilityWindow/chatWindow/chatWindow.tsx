'use client';
import { MessageBox } from '@/app/components/utilityWindow/chatWindow/messageBox';
import { SendMessageField } from '@/app/components/utilityWindow/chatWindow/sendMessageField';
import { chatMock } from '@/app/mocks/chatMock';
import { MessageInterface } from '@/app/types/Chat';
import { ScrollArea } from '@/components/ui/scroll-area';
import { useState } from 'react';

interface ChatWindowProps {
  currentChat: string;
}

export function ChatWindow({ currentChat }: ChatWindowProps) {
  const myUser = 'Friend0';
  const unsortedChats: MessageInterface[] = chatMock.chat; //Fetch old message
  const sortedChats: MessageInterface[] = unsortedChats.sort((n1, n2) => {
    if (n1.timestamp > n2.timestamp) {
      return 1;
    } else if (n1.timestamp < n2.timestamp) {
      return -1;
    }

    return 0;
  });
  const [displayChats, setDisplayChats] = useState(sortedChats);
  if (currentChat === '') {
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
