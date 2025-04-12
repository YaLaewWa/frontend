import { SocketHandler } from "@/components/socketHandler";

export default function Page() {

  return (
    <div>
      {process.env.BACKEND_URL ?
      <SocketHandler backendUrl={process.env.BACKEND_URL}/>
      :
      <div/>
      }
    </div>
  );
}