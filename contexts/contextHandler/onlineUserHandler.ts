import { User } from "@/types/ServerMessageType";

export function initOnlineUser(setOnlineUsers: React.Dispatch<React.SetStateAction<User[]>>, payload: any){
  setOnlineUsers(payload);
}

export function addOnlineUser(onlineUsers: User[], setOnlineUsers: React.Dispatch<React.SetStateAction<User[]>>, payload: any){
  setOnlineUsers([...onlineUsers, payload])
}

export function removeOnlineUser(onlineUsers: User[], setOnlineUsers: React.Dispatch<React.SetStateAction<User[]>>, payload: any){
  const index = onlineUsers.findIndex(payload)
  setOnlineUsers([...onlineUsers.slice(0,index), ...onlineUsers.slice(index + 1, onlineUsers.length)])
}