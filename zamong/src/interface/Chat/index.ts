export interface Chats {
  chat: string;
  created_at: string;
  its_me: boolean;
  room: any;
  to: any;
  user: {
    id: string;
    profile: string;
    uuid: string;
  };
  uuid: string;
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
