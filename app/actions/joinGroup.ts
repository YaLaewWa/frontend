'use server';

import { auth } from '@/lib/auth';
import { revalidatePath } from 'next/cache';

export const joinGroup = async (groupID: string) => {
  const session = await auth();
  const res = await fetch(`${process.env.BACKEND_URL}/chats/${groupID}/join`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${session?.accessToken}`,
    },
  });
  const data = await res.json();
  if (res.ok && data) {
    revalidatePath('/?mode=GROUP');
    return;
  } else if (!res.ok) {
    return { message: data.error };
  } else {
    return { message: 'Something is wrong' };
  }
};
