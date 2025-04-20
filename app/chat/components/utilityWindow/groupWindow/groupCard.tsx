import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import React from 'react';

export const GroupCard = ({ groupName, members }: GroupCardInterface) => {
  return (
    <div className="border-2 hover:border-gray-700 rounded-xl w-full p-3 gap-2 flex flex-col">
      <h1 className="text-xl">{groupName}</h1>
      <div className="flex gap-1">
        {members &&
          members.length > 0 &&
          members.map((d) => {
            return (
              <Avatar className="items-center w-[40px] h-[40px] border">
                <AvatarFallback>
                  {d.username.split(' ').map((e) => e.charAt(0))}
                </AvatarFallback>
              </Avatar>
            );
          })}
      </div>
    </div>
  );
};
