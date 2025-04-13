"use client";

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

interface HeaderButtonProps {
  currentMode: string;
  targetMode: string;
  icon: React.ReactNode;
}

export function HeaderButton({
  currentMode,
  targetMode,
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
        disabled={currentMode === targetMode}
        onClick={() => changeMode(targetMode)}
      >
        {icon}
      </Button>
    </div>
  );
}
