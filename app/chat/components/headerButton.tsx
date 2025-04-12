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
  function changeParams(path: string) {
    router.push(`${baseUrl}${path}`);
  }
  return (
    <div className="flex mx-auto">
      <Button
        disabled={utilMode === buttonMode}
        onClick={() => changeParams(`?mode=${buttonMode}`)}
      >
        {icon}
      </Button>
    </div>
  );
}
