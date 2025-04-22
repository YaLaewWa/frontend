import { GroupInterface } from '@/types/ServerMessageType';

export function addNewGroup(
  groups: GroupInterface[],
  setGroups: React.Dispatch<React.SetStateAction<GroupInterface[]>>,
  payload: any
) {
  setGroups([...groups, payload]);
}

export function newJoinGroup(
  groups: GroupInterface[],
  setGroups: React.Dispatch<React.SetStateAction<GroupInterface[]>>,
  payload: any
) {
  const index = groups.findIndex((group) => group.id === payload.chat_id);

  setGroups([
    ...groups.slice(0, index),
    {
      ...groups[index],
      members: [
        ...groups[index].members,
        {
          username: payload.username,
        },
      ],
      joined: true,
    },
    ...groups.slice(index + 1, groups.length),
  ]);
  console.log(groups);
}
