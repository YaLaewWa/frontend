import { FriendSideBar } from "@/app/chat/components/friendSideBar";
import { UtilityArea } from "@/app/chat/components/utilityArea";
import { SidebarProvider } from "@/components/ui/sidebar";

export default async function Page({
    searchParams,
  }: {
    searchParams: Promise<{ user: string }>;
  }) {
    const user = (await searchParams).user ?? "";
    return (
        <div>
            <SidebarProvider>
                <FriendSideBar selectedUser={user}/>
                <UtilityArea/>
            </SidebarProvider>
            
        </div>
    );
}