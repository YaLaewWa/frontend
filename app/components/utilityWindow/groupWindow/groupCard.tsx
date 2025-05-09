'use client';
import { joinGroup } from '@/app/actions/joinGroup';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
} from '@/components/ui/dialog';
import { GroupInterface } from '@/types/ServerMessageType';
import {
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from '@radix-ui/react-dialog';
import { CircleCheckBig } from 'lucide-react';
import { toast } from 'sonner';

export const GroupCard = ({ name, members, id, joined }: GroupInterface) => {
  async function joinGroupClick() {
    const res = await joinGroup(id);
    if (!res) {
      toast(
        <div className="flex gap-3 items-center">
          <CircleCheckBig className="text-green-500" />
          <p className="text-base">Joined group</p>
        </div>
      );
    } else {
      toast.error('Error', {
        description: res.message,
      });
    }
  }
  return (
    <div className="flex border-2 hover:border-gray-700 rounded-xl p-3 items-center">
      <Dialog>
        <DialogTrigger asChild>
          <div className="w-full gap-2 flex flex-col hover:cursor-pointer">
            <h1 className="text-xl">{name}</h1>
            <div className="flex gap-1">
              {members &&
                members.length > 0 &&
                members.map((d) => {
                  return (
                    <div key={d.username}>
                      <Avatar className="items-center w-[40px] h-[40px] border">
                        <AvatarFallback>{d.username.charAt(0)}</AvatarFallback>
                      </Avatar>
                    </div>
                  );
                })}
            </div>
          </div>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle className="text-3xl font-bold">{name}</DialogTitle>
            <DialogDescription>
              <div className="flex flex-col gap-3">
                <p className="text-xl">Members:</p>
                <div className="flex flex-col gap-2">
                  {members &&
                    members.length > 0 &&
                    members.map((d) => {
                      return (
                        <div
                          key={d.username}
                          className="flex gap-5 items-center"
                        >
                          <Avatar className="items-center w-[40px] h-[40px] border">
                            <AvatarFallback>
                              {d.username.split(' ').map((e) => e.charAt(0))}
                            </AvatarFallback>
                          </Avatar>
                          <p>{d.username}</p>
                        </div>
                      );
                    })}
                </div>
              </div>
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            {joined ? (
              <Button
                disabled={true}
                variant={'outline'}
                className="mr-5 p-5"
                onClick={joinGroupClick}
              >
                Joined
              </Button>
            ) : (
              <Button className="mr-5 p-5" onClick={joinGroupClick}>
                Join
              </Button>
            )}
          </DialogFooter>
        </DialogContent>
      </Dialog>
      {joined ? (
        <Button
          disabled={true}
          variant={'outline'}
          className="mr-5 p-5"
          onClick={joinGroupClick}
        >
          Joined
        </Button>
      ) : (
        <Button className="mr-5 p-5" onClick={joinGroupClick}>
          Join
        </Button>
      )}
    </div>
  );
};
