export interface profileResponse {
  status: number;
  timestamp: string;
  content: {
    collection_value: boolean;
    response: {
      uuid: string;
      name: string;
      email: string;
      id: string;
      profile: string;
      share_dream_count: number;
      lucy_count: number;
    };
  };
}
export interface followingListResponse {
  status: number;
  timestamp: string;
  content: {
    collection_value: boolean;
    response: {
      followings: [
        {
          uuid: string;
          profile: string;
          id: string;
          follow_datetime: string;
          is_following: boolean;
        }
      ];
      total_size: number;
      total_page: number;
    };
  };
}

export interface followerListResponse {
  status: number;
  timestamp: string;
  content: {
    collection_value: boolean;
    response: {
      followers: [
        {
          uuid: string;
          profile: string;
          id: string;
          follow_datetime: string;
          is_following: boolean;
        }
      ];
      total_size: number;
      total_page: number;
    };
  };
}
