'use client';

import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

interface HeaderButtonProps {
  currentMode: string;
  targetMode: string;
  icon: React.ReactNode;
  text: string;
}

export function HeaderButton({
  currentMode,
  targetMode,
  icon,
  text,
}: HeaderButtonProps) {
  const router = useRouter();
  return (
    <div className="h-full w-full">
      {currentMode === targetMode ? (
        <Link
          href={`/?mode=${targetMode}`}
          className="flex justify-center gap-2 hover:cursor-default bg-gray-200 p-2 border-b-2 border-b-gray-400"
        >
          {icon}
          <div>{text}</div>
        </Link>
      ) : (
        <Link
          href={`/?mode=${targetMode}`}
          className="flex justify-center gap-2 p-2 hover:bg-gray-300 hover:border-b-2 hover:border-b-gray-400"
        >
          {icon}
          <div>{text}</div>
        </Link>
      )}
    </div>
  );
}
