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

export interface MessageInterface {
  sender: string;
  chatID: string;
  timestamp: Date;
  content: string;
}

export interface FriendBarInterface {
  username: string;
  timestamp: Date;
  count: number;
  chat: GroupInterface;
}
