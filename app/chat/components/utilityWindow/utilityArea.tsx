import { CreateGroupWindow } from "@/app/chat/components/utilityWindow/createGroupWindow/createGroupWindow";
import { ChatWindow } from "@/app/chat/components/utilityWindow/chatWindow/chatWindow";
import { FriendWindow } from "@/app/chat/components/utilityWindow/friendWindow/friendWindow";
import { GroupWindow } from "@/app/chat/components/utilityWindow/groupWindow/groupWindow";

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
  if (mode === "GROUP") {
    return (
      <div>
        <GroupWindow />
      </div>
    );
  } else if (mode === "CREATE") {
    return (
      <div>
        <CreateGroupWindow />
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
