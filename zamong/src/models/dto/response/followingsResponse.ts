import defaultResponse from "./defaultResponse";

export interface following {
  uuid: string;
  profile: string;
  id: string;
  follow_datetime: string;
  is_following: boolean;
}

export type followingResponse = defaultResponse<{
  followings: following[];
  total_size: number;
  total_page: number;
}>;
