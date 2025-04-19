import { LogOutIcon } from "lucide-react";

export function LogoutButton() {
  return (
    <div className="self-center rounded-full bg-white p-2 border">
      <LogOutIcon color={"black"} strokeWidth={"3px"} />
    </div>
  );
}
