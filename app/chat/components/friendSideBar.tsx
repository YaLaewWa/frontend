import { Plus, Search, User, Users2 } from "lucide-react"

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"

const baseUrl="/chat"

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
]

interface FriendSideBarProps{
  selectedUser: string
}

export function FriendSideBar({
  selectedUser,
} : FriendSideBarProps) {

  return (
    <Sidebar>
      <SidebarHeader className="px-[20px] grid grid-cols-3">
        <Search/>
        <Users2/>
        <Plus/>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Chat lists</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title} className={`${item.title === selectedUser ? "bg-gray-300" : ""}`}>
                  <SidebarMenuButton asChild>
                    <a href={`${baseUrl}?user=${item.title}`}>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}