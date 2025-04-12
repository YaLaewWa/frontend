import { Socket } from "@/app/socket";

export default function Page() {
  console.log(process.env.BACKEND_URL)
  return (
    <div>
      <Socket backendUrl={process.env.BACKEND_URL ?? ""}/>
    </div>
  );
}