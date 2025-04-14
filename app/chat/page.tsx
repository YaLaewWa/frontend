import { MainSidebar } from "@/app/chat/components/mainSidebar";
import { UtilityArea } from "@/app/chat/components/utilityWindow/utilityArea";
import { SidebarProvider } from "@/components/ui/sidebar";

export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | undefined }>;
}) {
  const currentUser = (await searchParams).user ?? "";
  const currentMode = (await searchParams).mode ?? "CHAT";
  return (
    <div>
      <SidebarProvider>
        <MainSidebar currentUser={currentUser} currentMode={currentMode} />
        <UtilityArea currentMode={currentMode} />
      </SidebarProvider>
    </div>
  );
}
