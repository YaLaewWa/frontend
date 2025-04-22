import { Contact, Users } from 'lucide-react';
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
import { unsortedUsersMock } from '@/app/mocks/userSidebarMock';
import { ControlBar } from '@/app/components/controlBar/controlBar';

interface MainSidebarProps {
  currentUser: string;
  currentMode: string;
}

// Fetch chat order and friend
const unsortedUsers = unsortedUsersMock;

const sortedUsers = unsortedUsers.sort((n1, n2) => {
  if (n1.timestamp < n2.timestamp) {
    return 1;
  } else if (n1.timestamp > n2.timestamp) {
    return -1;
  }

  return 0;
});

export async function MainSidebar({
  currentUser,
  currentMode,
}: MainSidebarProps) {
  return (
    <Sidebar>
      <SidebarHeader className="flex flex-row items-stretch gap-0 p-0">
        <HeaderButton
          currentMode={currentMode}
          targetMode="FRIEND"
          icon={<Contact />}
          text="Friends"
        />
        <HeaderButton
          currentMode={currentMode}
          targetMode="GROUP"
          icon={<Users />}
          text="Groups"
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
        <ControlBar />
      </SidebarFooter>
    </Sidebar>
  );
}
