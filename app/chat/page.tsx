import { FriendSideBar } from "@/app/chat/components/friendSideBar";
import { UtilityArea } from "@/app/chat/components/utilityWindow/utilityArea";
import { SidebarProvider } from "@/components/ui/sidebar";

export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | undefined }>;
}) {
  const user = (await searchParams).user ?? "";
  const utilMode = (await searchParams).mode ?? "CHAT";
  return (
    <div>
      <SidebarProvider>
        <FriendSideBar selectedUser={user} utilMode={utilMode} />
        <UtilityArea mode={utilMode} />
      </SidebarProvider>
    </div>
  );
}
