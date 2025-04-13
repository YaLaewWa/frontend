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
import { FriendBarInterface } from "@/app/chat/classes/UserClass";
import { unsortedUsersMock } from "@/app/chat/mocks/userSidebarMock";

interface FriendSideBarProps {
  selectedUser: string;
  utilMode: string;
}

// Fetch chat order and friend
const unsortedUsers: FriendBarInterface[] = unsortedUsersMock;

var sortedUsers: FriendBarInterface[] = unsortedUsers.sort((n1, n2) => {
  if (n1.timestamp < n2.timestamp) {
    return 1;
  } else if (n1.timestamp > n2.timestamp) {
    return -1;
  }

  return 0;
});

export function FriendSideBar({ selectedUser, utilMode }: FriendSideBarProps) {
  return (
    <Sidebar>
      <SidebarHeader className="grid grid-cols-3">
        <HeaderButton
          utilMode={utilMode}
          buttonMode="FRIEND"
          icon={<Users2 />}
        />
        <HeaderButton
          utilMode={utilMode}
          buttonMode="SEARCH"
          icon={<Search />}
        />
        <HeaderButton utilMode={utilMode} buttonMode="GROUP" icon={<Plus />} />
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Chat lists</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {sortedUsers.map((user) => (
                <FriendBar
                  key={user.username}
                  selectedUser={selectedUser}
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
