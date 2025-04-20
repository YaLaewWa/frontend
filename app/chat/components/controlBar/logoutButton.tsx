import { LogOutIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';

export function LogoutButton() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="self-center rounded-full bg-white p-2 border">
          <LogOutIcon color={'black'} strokeWidth={'3px'} />
        </div>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Logout Alert</DialogTitle>
          <DialogDescription>
            Do you want to logout from this account?
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <Button>Logout</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
