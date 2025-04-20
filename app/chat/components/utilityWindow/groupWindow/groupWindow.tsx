import { GroupCard } from '@/app/chat/components/utilityWindow/groupWindow/groupCard';
import { groupMock } from '@/app/chat/mocks/groupMock';
import { Divider } from '@/components/ui/divider';

export function GroupWindow() {
  const groups = groupMock.data;
  return (
    <div className="p-10 w-full border-2 flex flex-col items-center gap-3">
      <h1 className="text-4xl w-full">Group</h1>
      <Divider className="w-full" />
      <div className="w-full flex flex-col gap-2">
        {groups && groups.length > 0 ? (
          groups.map((d) => {
            return <GroupCard groupName={d.groupName} members={d.members} />;
          })
        ) : (
          <p></p>
        )}
      </div>
    </div>
  );
}
