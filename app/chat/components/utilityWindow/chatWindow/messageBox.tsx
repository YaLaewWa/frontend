interface MessageBoxProp {
  myUser: string;
  sender: string;
  timestamp: Date;
  message: string;
}
export function MessageBox({
  myUser,
  sender,
  timestamp,
  message,
}: MessageBoxProp) {
  const userIsSender = sender === myUser;
  // if (sender === currentUser) {
  return (
    <div className={`flex my-1 ${userIsSender ? 'justify-end' : ''}`}>
      <div className={`max-w-[300px] ${userIsSender ? 'mr-2' : 'ml-3'}`}>
        <div className={`flex ${userIsSender ? 'justify-end' : ''}`}>
          <p
            className={`text-sm text-gray-500 ${
              userIsSender ? 'pr-2' : 'pl-3'
            }`}
          >
            {sender}
          </p>
        </div>
        <div className="flex">
          <p
            className={`py-[10px] px-[15px] border rounded-2xl max-w-[300px] wrap-break-word ${
              userIsSender ? ' bg-black text-white ' : ''
            }`}
          >
            {message}
          </p>
        </div>
        <div className={`flex ${userIsSender ? 'justify-end' : ''}`}>
          <p
            className={`text-sm text-gray-500 ${
              userIsSender ? 'pr-2' : 'pl-3'
            }`}
          >
            {timestamp.toLocaleTimeString().slice(0, -6) +
              timestamp.toLocaleTimeString().slice(-3)}
          </p>
        </div>
      </div>
    </div>
  );
}
