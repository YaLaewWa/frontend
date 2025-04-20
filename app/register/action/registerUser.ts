"use server";
export async function registerUser(values: {
  username: string;
  password: string;
}) {
  const res = await fetch(`${process.env.BACKEND_URL}/register`, {
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
  console.log(res);
  if (res.ok && data) {
    return;
  } else if (!res.ok) {
    return { message: data.error };
  } else {
    return { message: "Something is wrong" };
  }
}
