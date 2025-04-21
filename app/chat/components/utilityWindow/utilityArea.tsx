import { CreateGroupWindow } from '@/app/chat/components/utilityWindow/createGroupWindow/createGroupWindow';
import { ChatWindow } from '@/app/chat/components/utilityWindow/chatWindow/chatWindow';
import { FriendWindow } from '@/app/chat/components/utilityWindow/friendWindow/friendWindow';
import { GroupWindow } from '@/app/chat/components/utilityWindow/groupWindow/groupWindow';

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
    return <GroupWindow />;
  } else if (currentMode === 'CREATE') {
    return <CreateGroupWindow />;
  } else if (currentMode === 'FRIEND') {
    return <FriendWindow />;
  } else {
    return <ChatWindow currentUser={currentUser} />;
  }
}
