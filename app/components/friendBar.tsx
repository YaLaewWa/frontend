'use client';

import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { useWebSocketContext } from '@/contexts/WebsocketContext';
import { useRouter } from 'next/navigation';

export function FriendBar({
  currentChat,
  chatName,
  unread,
  chat_id,
}: {
  currentChat: string;
  chatName: string;
  unread: number;
  chat_id: string;
}) {
  const router = useRouter();
  const { setActiveChat } = useWebSocketContext();
  function changeChat(toUser: string) {
    setActiveChat(chat_id);
    router.push(`/?id=${toUser}`);
  }
  const isSelected = currentChat === chat_id;
  return (
    <button
      onClick={() => changeChat(chat_id)}
      disabled={isSelected}
      className={`py-[10px] ${
        isSelected ? 'bg-gray-300' : 'hover:bg-gray-200'
      }`}
    >
      <div className="flex pl-[5px]">
        <Avatar className="items-center w-[40px] h-[40px] border">
          <AvatarFallback>
            {chatName.split(' ').map((e) => e.charAt(0))}
          </AvatarFallback>
        </Avatar>
        <p className="self-center pl-[10px]">{chatName}</p>
        {isSelected ? (
          <div />
        ) : (
          <div className="flex-1 flex self-center justify-end pr-[10px]">
            {unread > 0 && (
              <p className="bg-gray-600 rounded-full px-[8px] py-[4px] text-white border text-xs">
                {unread}
              </p>
            )}
          </div>
        )}
      </div>
    </button>
  );
}
