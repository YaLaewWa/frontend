'use client';
import { LogoutButton } from '@/app/components/controlBar/logoutButton';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { useSession } from 'next-auth/react';

export function ControlBar() {
  const { data: session } = useSession();
  const username = session?.user?.username ?? '';
  return (
    <div className="w-[256px] p-2 fixed bottom-0 left-0 ">
      <div className="flex bg-gray-300 p-2 rounded-2xl">
        <Avatar className="items-center w-[40px] h-[40px] border">
          <AvatarFallback>{username.charAt(0)}</AvatarFallback>
        </Avatar>
        <p className="text-black self-center ml-3 mr-11 text-sm">{username}</p>
        <div className="flex-1 flex justify-end">
          <LogoutButton />
        </div>
      </div>
    </div>
  );
}
