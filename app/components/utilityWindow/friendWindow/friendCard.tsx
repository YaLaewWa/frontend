'use client';
import { checkDM } from '@/app/actions/checkDM';
import { createDM } from '@/app/actions/createDM';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { useWebSocketContext } from '@/contexts/WebsocketContext';
import { useRouter } from 'next/navigation';

export const FriendCard = ({
  username,
  isYourself,
}: {
  username: string;
  isYourself: boolean;
}) => {
  const router = useRouter();
  const { setActiveChat } = useWebSocketContext();
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
        <Button
          onClick={async () => {
            const res = await checkDM(username);
            if (res.status) {
              setActiveChat(res.id);
              router.push(`/?id=${res.id}`);
            } else {
              const response = await createDM(username);
              setActiveChat(response.id);
              router.push(`/?id=${response.id}`);
            }
          }}
        >
          Chat
        </Button>
      )}
    </div>
  );
};
