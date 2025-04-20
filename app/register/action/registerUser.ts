export async function registerUser(values: any) {
  const res = await fetch(`${process.env.BACKEND_URL}/auth/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      username: values.username,
      password: values.password,
    }),
  });
  const data = await res.json();
  if (res.ok && data) {
    return;
  }
  return { message: data.error };
}
