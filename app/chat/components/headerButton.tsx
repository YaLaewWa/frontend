"use client";

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

interface HeaderButtonProps {
  utilMode: string;
  buttonMode: string;
  icon: React.ReactNode;
}

export function HeaderButton({
  utilMode,
  buttonMode,
  icon,
}: HeaderButtonProps) {
  const router = useRouter();
  const baseUrl = "/chat";
  function changeMode(path: string) {
    router.push(`${baseUrl}?mode=${path}`);
  }
  return (
    <div className="flex mx-auto">
      <Button
        disabled={utilMode === buttonMode}
        onClick={() => changeMode(buttonMode)}
      >
        {icon}
      </Button>
    </div>
  );
}
