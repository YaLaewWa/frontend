'use server';

import { auth } from '@/lib/auth';

export const createGroup = async (groupName: string) => {
  const session = await auth();
  const res = await fetch(`${process.env.BACKEND_URL}/group`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${session?.accessToken}`,
    },
    body: JSON.stringify({ groupName: groupName }),
  });
  const data = await res.json();
  if (res.ok && data) {
    return;
  } else if (!res.ok) {
    return { message: data.error };
  } else {
    return { message: 'Something is wrong' };
  }
};
