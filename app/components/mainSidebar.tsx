'use client';
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
import { ControlBar } from '@/app/components/controlBar/controlBar';
import { useWebSocketContext } from '@/contexts/WebsocketContext';

interface MainSidebarProps {
  currentUser: string;
  currentMode: string;
}

export function MainSidebar({ currentUser, currentMode }: MainSidebarProps) {
  const { sidebars } = useWebSocketContext();

  const sortedUsers = sidebars.sort((n1, n2) => {
    if (n1.timestamp < n2.timestamp) {
      return 1;
    } else if (n1.timestamp > n2.timestamp) {
      return -1;
    }

    return 0;
  });
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
                  username={user.username}
                  unread={user.count}
                  chat_id={user.chat.id}
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
