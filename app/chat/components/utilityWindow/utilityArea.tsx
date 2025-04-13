import { GroupWindow } from "@/app/chat/components/utilityWindow/addGroupWindow/groupWindow";
import { ChatWindow } from "@/app/chat/components/utilityWindow/chatWindow/chatWindow";
import { FriendWindow } from "@/app/chat/components/utilityWindow/friendWindow/friendWindow";
import { SearchWindow } from "@/app/chat/components/utilityWindow/searchWindow/searchWindow";

interface UtitlityAreaProps {
  mode: string;
}

export function UtilityArea({ mode }: UtitlityAreaProps) {
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
  if (mode === "SEARCH") {
    return (
      <div>
        <SearchWindow />
      </div>
    );
  } else if (mode === "GROUP") {
    return (
      <div>
        <GroupWindow />
      </div>
    );
  } else if (mode === "FRIEND") {
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
