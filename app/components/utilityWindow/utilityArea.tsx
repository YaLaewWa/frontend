import { CreateGroupWindow } from '@/app/components/utilityWindow/createGroupWindow/createGroupWindow';
import { ChatWindow } from '@/app/components/utilityWindow/chatWindow/chatWindow';
import { FriendWindow } from '@/app/components/utilityWindow/friendWindow/friendWindow';
import { GroupWindow } from '@/app/components/utilityWindow/groupWindow/groupWindow';

interface UtitlityAreaProps {
  currentUser: string;
  currentMode: string;
}

export function UtilityArea({ currentUser, currentMode }: UtitlityAreaProps) {
  // There are 2 method to choose but the later one is more readable
  // return (
  //     <div>
  //         {mode ==="SEARCH" ?
  //         <SearchWindow/>
  //         : mode === "GROUP" ?
  //         <GroupWindow/>
  //         : mode === "FRIEND" ?
  //         <FriendWindow/>
  //         :
  //         <ChatWindow/>

  //         }
  //     </div>
  // );
  if (currentMode === 'GROUP') {
    return (
      <div className="w-full">
        <GroupWindow />
      </div>
    );
  } else if (currentMode === 'FRIEND') {
    return (
      <div>
        <FriendWindow />
      </div>
    );
  } else {
    return <ChatWindow currentUser={currentUser} />;
  }
}
