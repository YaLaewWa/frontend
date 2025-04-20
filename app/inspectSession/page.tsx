import { useSession } from "next-auth/react";

export function Page() {
  const {data : session} = useSession()
  return (
    <div>
      <p>{session?.user.username}</p>
      <p>{session?.user.accessToken}</p>
    </div>
  );
}