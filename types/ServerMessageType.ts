export interface User {
  username: string;
}

type EventType =
  | 'message'
  | 'online_users'
  | 'user_login'
  | 'user_logout'
  | 'new_group'
  | 'new_user_group'
  | 'sidebar_update';

export interface WebSocketMessage {
  type: EventType;
  payload: any;
}

export interface User {
  username: string;
}

export interface GroupInterface {
  name: string;
  id: string;
  members: User[];
  is_group: boolean;
  joined: boolean;
}

export interface ConversationInterface{
  type: string;
  payload: MessageInterface;
}

export interface MessageInterface {
  username: string;
  create_at: Date;
  message: string;
}

export interface FriendBarInterface {
  username: string;
  timestamp: Date;
  count: number;
  chat: GroupInterface;
}
