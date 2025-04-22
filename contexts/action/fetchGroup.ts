'use server';

import { auth } from '@/lib/auth';

export const fetchGroup = async () => {
  const session = await auth();
  const res = await fetch(
    `${process.env.BACKEND_URL}/chats/group?limit=-1&page=0`,
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${session?.accessToken}`,
      },
    }
  );
  const data = await res.json();
  console.log(data);
  if (res.ok && data) {
    return data;
  } else if (!res.ok) {
    return { message: data.error };
  } else {
    return { message: 'Something is wrong' };
  }
};
