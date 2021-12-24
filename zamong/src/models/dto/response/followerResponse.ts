import defaultResponse from "./defaultResponse";

export interface follower {
  uuid: string;
  profile: string;
  id: string;
  follow_datetime: string;
  is_following: boolean;
}

export type followingResponse = defaultResponse<{
  followers: follower[];
  total_size: number;
  total_page: number;
}>;
