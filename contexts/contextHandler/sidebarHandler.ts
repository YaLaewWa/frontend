import { FriendBarInterface } from '@/types/ServerMessageType';

export function addNewSidebar(
  setSidebar: React.Dispatch<React.SetStateAction<FriendBarInterface[]>>,
  payload: any
) {
  setSidebar(payload.queue);
}
