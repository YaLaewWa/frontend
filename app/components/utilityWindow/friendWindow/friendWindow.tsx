'use client';
import { FriendCard } from '@/app/components/utilityWindow/friendWindow/friendCard';
import { Divider } from '@/components/ui/divider';
import { useWebSocketContext } from '@/contexts/WebsocketContext';
import { useSession } from 'next-auth/react';

export function FriendWindow() {
  // const friends = friendsMock.data;
  const { onlineUsers: friends } = useWebSocketContext();
  const { data: session } = useSession();
  console.log(friends);
  return (
    <div className="p-10 w-full flex flex-col items-center gap-3">
      <div className="flex justify-between w-full">
        <h1 className="text-4xl w-full">Online Users</h1>
      </div>
      <Divider className="w-full mb-3" />
      <div className="w-full flex flex-col gap-2">
        <FriendCard
          username={session?.user?.username ?? ''}
          isYourself={true}
        />
        {friends && friends.length > 0 ? (
          friends.filter(d => d !== session?.user?.username).map((d) => (
            <FriendCard
              key={d} // Add this unique key
              username={d}
              isYourself={false}
            />
          ))
        ) : (
          <p>No users found</p>
        )}
      </div>
    </div>
  );
}
