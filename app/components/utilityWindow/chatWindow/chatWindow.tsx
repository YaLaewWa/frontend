'use client';
import { MessageBox } from '@/app/components/utilityWindow/chatWindow/messageBox';
import { SendMessageField } from '@/app/components/utilityWindow/chatWindow/sendMessageField';
import { ScrollArea } from '@/components/ui/scroll-area';
import { useWebSocketContext } from '@/contexts/WebsocketContext';
import { useSession } from 'next-auth/react';

interface ChatWindowProps {
  currentUser: string;
}

export function ChatWindow({ currentUser }: ChatWindowProps) {
  const { data: session } = useSession();
  const { conversation } = useWebSocketContext();
  const displayChats = conversation.sort((n1, n2) => {
    if (n1.payload.create_at > n2.payload.create_at) {
      return 1;
    } else if (n1.payload.create_at < n2.payload.create_at) {
      return -1;
    }

    return 0;
  });
  if (currentUser === '') {
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
                key={
                  (session?.user?.username ?? '') + message.payload.create_at
                }
                myUser={session?.user?.username ?? ''}
                sender={message.payload.username}
                timestamp={message.payload.create_at}
                message={message.payload.message}
              />
            ))}
          </div>
        </ScrollArea>
        <SendMessageField />
      </div>
    );
  }
}
