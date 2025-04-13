"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useRouter } from "next/navigation";

interface FriendBarProp {
  selectedUser: string;
  barUser: string;
}

export function FriendBar({ selectedUser, barUser }: FriendBarProp) {
  const router = useRouter();
  const baseUrl = "/chat";
  function changeChat(toUser: string) {
    router.push(`${baseUrl}?user=${toUser}`);
  }
  return (
    <button
      onClick={() => changeChat(barUser)}
      disabled={selectedUser === barUser}
      className={`py-[10px] ${
        selectedUser === barUser ? "bg-gray-300" : "hover:bg-gray-200"
      }`}
    >
      <div className="flex">
        <Avatar className="items-center w-[40px] h-[40px] border">
          <AvatarFallback>
            {barUser.split(" ").map((e) => e.charAt(0))}
          </AvatarFallback>
        </Avatar>
        <p className="self-center pl-[10px]">{barUser}</p>
      </div>
    </button>
  );
}
