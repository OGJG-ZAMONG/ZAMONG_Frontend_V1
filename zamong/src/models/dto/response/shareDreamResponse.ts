import defaultResponse from "./defaultResponse";

export interface Dream {
  uuid: string;
  default_posting_image: string;
  profile: string;
  title: string;
  created_at: string;
  is_shared: boolean;
}

export type shareDreamResponse = defaultResponse<{
  share_dreams: Dream[];
  total_page: number;
  total_size: number;
}>;
