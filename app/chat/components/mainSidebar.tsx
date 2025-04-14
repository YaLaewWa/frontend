import { Plus, Search, Users2 } from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
} from "@/components/ui/sidebar";
import { HeaderButton } from "@/app/chat/components/headerButton";
import { FriendBar } from "@/app/chat/components/friendBar";
import { FriendBarInterface } from "@/app/chat/types/UserClass";
import { unsortedUsersMock } from "@/app/chat/mocks/userSidebarMock";

interface MainSidebarProps {
  currentUser: string;
  currentMode: string;
}

// Fetch chat order and friend
const unsortedUsers: FriendBarInterface[] = unsortedUsersMock;

const sortedUsers: FriendBarInterface[] = unsortedUsers.sort((n1, n2) => {
  if (n1.timestamp < n2.timestamp) {
    return 1;
  } else if (n1.timestamp > n2.timestamp) {
    return -1;
  }

  return 0;
});

export function MainSidebar({ currentUser, currentMode }: MainSidebarProps) {
  return (
    <Sidebar>
      <SidebarHeader className="grid grid-cols-3">
        <HeaderButton
          currentMode={currentMode}
          targetMode="FRIEND"
          icon={<Users2 />}
        />
        <HeaderButton
          currentMode={currentMode}
          targetMode="GROUP"
          icon={<Search />}
        />
        <HeaderButton
          currentMode={currentMode}
          targetMode="CREATE"
          icon={<Plus />}
        />
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Chat lists</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {sortedUsers.map((user) => (
                <FriendBar
                  key={user.username}
                  currentUser={currentUser}
                  barUser={user.username}
                  unread={user.unread}
                />
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
