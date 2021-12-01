import defaultResponse from "./defaultResponse";

export type profileResponse = defaultResponse<{
  uuid: string;
  name: string;
  email: string;
  id: string;
  profile: string;
  share_dream_count: number;
  lucy_count: number;
}>;

export type followingListResponse = defaultResponse<{
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
}>;

export type followerListResponse = defaultResponse<{
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
}>;
