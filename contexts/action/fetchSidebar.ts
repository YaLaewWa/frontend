'use server';

import { auth } from '@/lib/auth';

export const fetchSidebar = async () => {
  const session = await auth();
  const res = await fetch(`${process.env.BACKEND_URL}/sidebar`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${session?.accessToken}`,
    },
  });
  const data = await res.json();
  if (res.ok && data) {
    return data;
  } else if (!res.ok) {
    return { message: data.error };
  } else {
    return { message: 'Something is wrong' };
  }
};
