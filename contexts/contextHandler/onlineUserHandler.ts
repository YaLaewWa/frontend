

export function initOnlineUser(
  setOnlineUsers: React.Dispatch<React.SetStateAction<string[]>>,
  payload: any
) {
  setOnlineUsers(payload);
}

export function addOnlineUser(
  onlineUsers: string[],
  setOnlineUsers: React.Dispatch<React.SetStateAction<string[]>>,
  payload: any
) {
  setOnlineUsers([...onlineUsers, payload]);
}

export function removeOnlineUser(
  onlineUsers: string[],
  setOnlineUsers: React.Dispatch<React.SetStateAction<string[]>>,
  payload: any
) {
  const index = onlineUsers.indexOf(payload);
  setOnlineUsers([
    ...onlineUsers.slice(0, index),
    ...onlineUsers.slice(index + 1, onlineUsers.length),
  ]);
}
