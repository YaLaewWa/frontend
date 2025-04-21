'use server';

import { auth } from '@/lib/auth';

export const createGroup = async (groupName: string) => {
  const session = await auth();
  try {
    const res = await fetch(`${process.env.BACKEND_URL}/group`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${session?.accessToken}`,
      },
      body: JSON.stringify({ groupName: groupName }),
    });
  } catch (err) {
    if (err instanceof Response) {
      const errorMessage = await err.json();
      return errorMessage;
    } else {
      console.error('Unexpected error:', err);
    }
  }
};
