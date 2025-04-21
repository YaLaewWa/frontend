import { CreateGroupWindow } from "@/app/chat/components/utilityWindow/createGroupWindow/createGroupWindow";
import { ChatWindow } from "@/app/chat/components/utilityWindow/chatWindow/chatWindow";
import { FriendWindow } from "@/app/chat/components/utilityWindow/friendWindow/friendWindow";
import { GroupWindow } from "@/app/chat/components/utilityWindow/groupWindow/groupWindow";

interface UtitlityAreaProps {
  currentMode: string;
}

export function UtilityArea({ currentMode }: UtitlityAreaProps) {
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
  if (currentMode === "GROUP") {
    return (
      <div>
        <GroupWindow />
      </div>
    );
  } else if (currentMode === "FRIEND") {
    return (
      <div>
        <FriendWindow />
      </div>
    );
  } else {
    return (
      <div>
        <ChatWindow />
      </div>
    );
  }
}
