interface MessageBoxProp {
  currentUser: string;
  sender: string;
  timestamp: Date;
  message: string;
}
export function MessageBox({
  currentUser,
  sender,
  timestamp,
  message,
}: MessageBoxProp) {
  if (sender === currentUser) {
    return (
      <div className="flex justify-end my-1">
        <div className="max-w-[300px] mr-1">
          <p className="text-end text-sm">{sender}</p>
          <p className="py-[10px] px-[15px] border rounded-2xl bg-black text-white max-w-[300px] wrap-break-word">
            {message}
          </p>
        </div>
      </div>
    );
  } else {
    return (
      <div className="flex my-1">
        <div className="max-w-[300px] ml-1">
          <p className="text-sm">{sender}</p>
          <p className="py-[10px] px-[15px] border rounded-2xl max-w-[300px] wrap-break-word">
            {message}
          </p>
        </div>
      </div>
    );
  }
}
