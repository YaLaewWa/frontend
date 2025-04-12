import { Socket } from "@/app/socket";

export default function Page() {
  return (
    <div>
      <Socket backendUrl={process.env.BACKEND_URL ?? ""}/>
    </div>
  );
}