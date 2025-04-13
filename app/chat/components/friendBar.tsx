"use client";

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
      {barUser}
    </button>
  );
}
