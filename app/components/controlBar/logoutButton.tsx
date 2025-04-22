'use client';
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
import { signOut } from 'next-auth/react';

export function LogoutButton() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="self-center rounded-full bg-white p-2 border hover:cursor-pointer">
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
          <Button onClick={() => signOut()}>Logout</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
