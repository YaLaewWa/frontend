import { LogoutButton } from '@/app/chat/components/controlBar/logoutButton';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';

interface ControlBarProps {
  user: string;
}

export function ControlBar({ user }: ControlBarProps) {
  return (
    <div className="fixed bottom-1 w-[248px] bg-gray-200 py-5 px-2 rounded-xl mx-1 border">
      <div className="flex">
        <Avatar className="items-center w-[40px] h-[40px] border">
          <AvatarFallback>
            {user.split(' ').map((e) => e.charAt(0))}
          </AvatarFallback>
        </Avatar>
        <p className="text-black self-center ml-3 mr-11 text-sm">{user}</p>
        <div className="flex-1 flex justify-end">
          <LogoutButton />
        </div>
      </div>
    </div>
  );
}
