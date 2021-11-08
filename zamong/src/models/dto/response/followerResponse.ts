export interface follower {
  uuid: string;
  profile: string;
  id: string;
  follow_datetime: string;
  is_following: boolean;
}

export interface followrResponse {
  status: number;
  timestamp: string;
  content: {
    collection_value: boolean;
    response: {
      followers: follower[];
      total_size: number;
      total_page: number;
    };
  };
}
