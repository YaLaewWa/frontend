import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';

export const FriendCard = ({ username }: { username: string }) => {
  return (
    <div className="flex border-2 hover:border-gray-700 rounded-xl p-3 items-center gap-3">
      <Avatar className="items-center w-[40px] h-[40px] border">
        <AvatarFallback>{username.charAt(0)}</AvatarFallback>
      </Avatar>
      <h1 className="text-xl w-full">{username}</h1>
      <Button>Chat</Button>
    </div>
  );
};
