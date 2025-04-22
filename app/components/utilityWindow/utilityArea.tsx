import { ChatWindow } from '@/app/components/utilityWindow/chatWindow/chatWindow';
import { FriendWindow } from '@/app/components/utilityWindow/friendWindow/friendWindow';
import { GroupWindow } from '@/app/components/utilityWindow/groupWindow/groupWindow';

interface UtitlityAreaProps {
  currentChat: string;
  currentMode: string;
}

export function UtilityArea({ currentChat, currentMode }: UtitlityAreaProps) {
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
      <div className="w-full">
        <FriendWindow />
      </div>
    );
  } else {
    return (
      <div className="w-full">
        <ChatWindow currentChat={currentChat} />
      </div>
    );
  }
}
