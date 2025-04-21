import { auth } from "@/lib/auth";

export default async function Page() {
  const session = await auth();
  return (
    <div>
      <p>{session?.user?.username}</p>
      <p>{session?.accessToken}</p>
    </div>
  );
}
