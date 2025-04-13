"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useRouter } from "next/navigation";

interface FriendBarProp {
  selectedUser: string;
  barUser: string;
  unread: number;
}

export function FriendBar({ selectedUser, barUser, unread }: FriendBarProp) {
  const router = useRouter();
  const baseUrl = "/chat";
  function changeChat(toUser: string) {
    router.push(`${baseUrl}?user=${toUser}`);
  }
  const isSelected = selectedUser === barUser
  return (
    <button
      onClick={() => changeChat(barUser)}
      disabled={isSelected}
      className={`py-[10px] ${
        isSelected ? "bg-gray-300" : "hover:bg-gray-200"
      }`}
    >
      <div className="flex pl-[5px]">
        <Avatar className="items-center w-[40px] h-[40px] border">
          <AvatarFallback>
            {barUser.split(" ").map((e) => e.charAt(0))}
          </AvatarFallback>
        </Avatar>
        <p className="self-center pl-[10px]">{barUser}</p>
        {isSelected ?
            <div/>
        :
        <div className="flex-1 flex self-center justify-end pr-[10px]">
            <p className="bg-gray-600 rounded-full p-[4px] text-white border">{unread}</p>
        </div>
        }
        
      </div>
    </button>
  );
}
