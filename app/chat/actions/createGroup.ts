'use server';

export const createGroup = async (groupName: string) => {
  const access_token = 'access_token';
  try {
    const res = await fetch(`${process.env.BACKEND_URL}/group`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${access_token}`,
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
