export interface GroupCardInterface {
  id: string;
  groupName: string;
  members: {
    username: string;
  }[];
  isGroup: boolean;
  joined: boolean;
}
