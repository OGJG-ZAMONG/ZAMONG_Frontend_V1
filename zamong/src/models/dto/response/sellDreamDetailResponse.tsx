export interface sellDreamDetailResponse {
  status: number;
  timestamp: string;
  content: {
    collection_value: boolean;
    response: {
      uuid: string;
      title: string;
      content: string;
      updated_at: string;
      dream_types: string[];
      attachment_image: string;
      cost: number;
      status: string;
      user: {
        uuid: string;
        id: string;
        profile: string;
      };
    };
  };
}

export interface sellDetail {
  uuid: string;
  title: string;
  content: string;
  updated_at: string;
  dream_types: string[];
  attachment_image: string;
  cost: number;
  status: string;
  user: {
    uuid: string;
    id: string;
    profile: string;
  };
}

export interface chat {
  status: number;
  timestamp: string;
  content: {
    collection_value: boolean;
    response: chatResponse;
  };
}

export interface chatResponse {
  uuid: string;
  title: string;
  content: string;
  updated_at: string;
  dream_types: string[];
  attachment_image: string;
  cost: number;
  status: string;
  user: {
    uuid: string;
    id: string;
    profile: string;
  };
  request_status: {
    is_requesting: null | boolean;
    is_accept: null | boolean;
    request_datetime: null | boolean;
  };
}

export interface chatList {
  status: number;
  timestamp: string;
  content: {
    collection_value: boolean;
    response: {
      requests: chatListResponse[];
    };
  };
}

export interface chatListResponse {
  uuid: string;
  user_uuid: string;
  id: string;
  profile: string;
  request_datetime: string;
}
