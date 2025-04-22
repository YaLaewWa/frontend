'use client';
import { CreateGroupDialog } from '@/app/components/utilityWindow/groupWindow/createGroupDialog';
import { GroupCard } from '@/app/components/utilityWindow/groupWindow/groupCard';
import { Divider } from '@/components/ui/divider';
import { useWebSocketContext } from '@/contexts/WebsocketContext';

export function GroupWindow() {
  const { groups } = useWebSocketContext();
  return (
    <div className="p-10 w-full flex flex-col items-center gap-3">
      <div className="flex justify-between w-full">
        <h1 className="text-4xl w-full">Group</h1>
        <CreateGroupDialog />
      </div>
      <Divider className="w-full mb-3" />
      <div className="w-full flex flex-col gap-2">
        {groups && groups.length > 0 ? (
          groups.map((d) => {
            return (
              <div key={d.groupName}>
                <GroupCard
                  groupName={d.groupName}
                  members={d.members}
                  id={d.id}
                  isGroup={d.isGroup}
                  joined={d.joined}
                />
              </div>
            );
          })
        ) : (
          <p></p>
        )}
      </div>
    </div>
  );
}
