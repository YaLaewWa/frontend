import { MainSidebar } from '@/app/components/mainSidebar';
import { UtilityArea } from '@/app/components/utilityWindow/utilityArea';
import { SidebarProvider } from '@/components/ui/sidebar';

export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | undefined }>;
}) {
  const currentChat = (await searchParams).id ?? '';
  const currentMode = (await searchParams).mode ?? 'CHAT';
  return (
    <div>
      <SidebarProvider>
        <MainSidebar currentChat={currentChat} currentMode={currentMode} />
        <UtilityArea currentChat={currentChat} currentMode={currentMode} />
      </SidebarProvider>
    </div>
  );
}
