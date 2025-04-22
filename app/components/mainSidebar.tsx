import { Plus, Search, Users2 } from 'lucide-react';
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
} from '@/components/ui/sidebar';
import { HeaderButton } from '@/app/components/headerButton';
import { FriendBar } from '@/app/components/friendBar';
import { FriendBarInterface } from '@/app/types/UserClass';
import { unsortedUsersMock } from '@/app/mocks/userSidebarMock';
import { ControlBar } from '@/app/components/controlBar/controlBar';

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
  const myUser = 'Friend0';
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
      <SidebarContent className="mb-16">
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
      <SidebarFooter className="p-0">
        <ControlBar user={myUser} />
      </SidebarFooter>
    </Sidebar>
  );
}
