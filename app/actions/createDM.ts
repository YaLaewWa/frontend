'use server';

import { auth } from '@/lib/auth';

export const createDM = async (username: string) => {
  const session = await auth();
  const res = await fetch(`${process.env.BACKEND_URL}/chats/direct`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${session?.accessToken}`,
    },
    body: JSON.stringify({
      name: 'dm',
      usernames: [session?.user?.username, username],
    }),
  });
  const data = await res.json();
  if (res.ok && data) {
    return data.data;
  } else if (!res.ok) {
    return { message: data.error };
  } else {
    return { message: 'Something is wrong' };
  }
};
