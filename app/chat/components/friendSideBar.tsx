import { User } from "lucide-react"

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"

// Fetch chat order and friend
const items = [
  {
    title: "Friend1",
    url: "#",
    icon: User,
  },
  {
    title: "Friend2",
    url: "#",
    icon: User,
  },
  {
    title: "Friend3",
    url: "#",
    icon: User,
  },
  {
    title: "Friend4",
    url: "#",
    icon: User,
  },
  {
    title: "Friend5",
    url: "#",
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
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Chat lists</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url}>
                      <item.icon />
                      <span className={`${item.title === selectedUser ? "bg-gray-600" : ""}`}>{item.title}</span>
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