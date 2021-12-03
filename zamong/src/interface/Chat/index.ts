export interface Chats {
  roomId: string;
  userId: string;
}

export interface Rooms {
  uuid: string;
  title: string;
  last_chat: {
    id: string;
    uuid: string;
    user: any;
  };
}
