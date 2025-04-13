import { Plus, Search, User, Users2 } from "lucide-react";
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

const baseUrl = "/chat";

// Fetch chat order and friend
const items = [
  {
    title: "Friend1",
    icon: User,
  },
  {
    title: "Friend2",
    icon: User,
  },
  {
    title: "Friend3",
    icon: User,
  },
  {
    title: "Friend4",
    icon: User,
  },
  {
    title: "Friend5",
    icon: User,
  },
];

interface FriendSideBarProps {
  selectedUser: string;
  utilMode: string;
}

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
              {items.map((item) => (
                <FriendBar
                  key={item.title}
                  selectedUser={selectedUser}
                  barUser={item.title}
                />
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
