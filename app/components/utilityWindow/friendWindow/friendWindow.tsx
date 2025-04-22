import { FriendCard } from '@/app/components/utilityWindow/friendWindow/friendCard';
import { friendsMock } from '@/app/mocks/friendsMock';
import { Divider } from '@/components/ui/divider';
import { auth } from '@/lib/auth';

export async function FriendWindow() {
  const friends = friendsMock.data;
  const session = await auth();
  return (
    <div className="p-10 w-full border-2 flex flex-col items-center gap-3">
      <div className="flex justify-between w-full">
        <h1 className="text-4xl w-full">Online Users</h1>
      </div>
      <Divider className="w-full mb-3" />
      <div className="w-full flex flex-col gap-2">
        <FriendCard username={session?.user?.username ?? ''} />
        {friends && friends.length > 0 ? (
          friends.map((d) => {
            return (
              <div key={d.username}>
                <FriendCard username={d.username} />
              </div>
            );
          })
        ) : (
          <p>No users found</p>
        )}
      </div>
    </div>
  );
}
