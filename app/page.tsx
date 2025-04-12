import { Socket } from "@/app/socket";

export default function Page() {
  return (
    <div>
      {process.env.BACKEND_URL ?
      <Socket backendUrl={process.env.BACKEND_URL}/>
      :
      <div/>
      }
    </div>
  );
}