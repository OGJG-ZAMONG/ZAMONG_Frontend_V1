export interface following {
  uuid: string;
  profile: string;
  id: string;
  follow_datetime: string;
  is_following: boolean;
}

export interface followingResponse {
  status: number;
  timestamp: string;
  content: {
    collection_value: boolean;
    response: {
      followings: following[];
      total_size: number;
      total_page: number;
    };
  };
}
