'use client';
import { checkDM } from '@/app/actions/checkDM';
import { createDM } from '@/app/actions/createDM';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { useWebSocketContext } from '@/contexts/WebsocketContext';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export const FriendCard = ({
  username,
  isYourself,
}: {
  username: string;
  isYourself: boolean;
}) => {
  const { setActiveChat } = useWebSocketContext();
  const [id, setId] = useState('');
  async function check(username: string) {
    const res = await checkDM(username);
    if (res.status) {
      setId(res.id);
    } else {
      const response = await createDM(username);
      setId(response.id);
    }
  }
  useEffect(() => {
    check(username);
  }, []);

  async function onClick() {
    console.log(id);
    setActiveChat(id);
  }
  return (
    <div className="flex border-2 hover:border-gray-700 rounded-xl p-3 items-center gap-3">
      <Avatar className="items-center w-[40px] h-[40px] border">
        <AvatarFallback>{(username ?? '').charAt(0)}</AvatarFallback>
      </Avatar>
      <div className="flex w-full text-xl gap-1.5">
        <p className="text-xl">{username}</p>
        {isYourself && <p>(me)</p>}
      </div>

      {!isYourself && (
        <Link href={`/?id=${id}`} onClick={onClick}>
          <Button>Chat</Button>
        </Link>
      )}
    </div>
  );
};
