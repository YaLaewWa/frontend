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
  const userIsSender = sender === currentUser;
  // if (sender === currentUser) {
    return (
      <div className={`flex my-1 ${userIsSender ? "justify-end" : ""}`}>
        <div className={`max-w-[300px] ${userIsSender ? "mr-2" : "ml-3"}`}>
          <div className={`flex ${userIsSender ? "justify-end" : ""}`}>
            <p className={`text-sm text-gray-500 ${userIsSender ? "pr-2" : "pl-3"}`}>{sender}</p>
          </div>
          <div className="flex">
            <p className={`py-[10px] px-[15px] border rounded-2xl max-w-[300px] wrap-break-word ${userIsSender ? " bg-black text-white " : ""}`}>
              {message}
            </p>
          </div>
        </div>
      </div>
    );
  // } else {
  //   return (
  //     <div className="flex my-1">
  //       <div className="max-w-[300px] ml-1">
  //         <p className="text-sm">{sender}</p>
  //         <p className="py-[10px] px-[15px] border rounded-2xl max-w-[300px] wrap-break-word">
  //           {message}
  //         </p>
  //       </div>
  //     </div>
  //   );
  // }
}
