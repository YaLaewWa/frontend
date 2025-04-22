'use client';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';

export const FriendCard = ({
  username,
  isYourself,
}: {
  username: string;
  isYourself: boolean;
}) => {
  return (
    <div className="flex border-2 hover:border-gray-700 rounded-xl p-3 items-center gap-3">
      <Avatar className="items-center w-[40px] h-[40px] border">
        <AvatarFallback>{username.charAt(0)}</AvatarFallback>
      </Avatar>
      <div className="flex w-full text-xl gap-1.5">
        <p className="text-xl">{username}</p>
        {isYourself && <p>(me)</p>}
      </div>

      {!isYourself && <Button>Chat</Button>}
    </div>
  );
};
