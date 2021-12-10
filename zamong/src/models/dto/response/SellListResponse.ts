import defaultResponse from "./defaultResponse";

export interface sellSearchList {
  uuid: string;
  default_posting_image: string;
  title: string;
  dream_types: string[];
  updated_at: string;
  cost: number;
  user: {
    uuid: string;
    id: string;
    profile: string;
  };
}

export type sellSearchResponse = defaultResponse<{
  sell_dreams: sellSearchList[];
  total_page: null;
  total_size: null;
}>;
