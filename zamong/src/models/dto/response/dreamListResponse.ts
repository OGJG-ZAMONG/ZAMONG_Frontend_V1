import defaultResponse from "./defaultResponse";

export interface DreamList {
  uuid: string;
  default_posting_image: string;
  user: {
    uuid: string;
    profile: string;
    id: string;
  };
  title: string;
  lucy_count: number;
  dream_types: string[];
  share_datetime: string;
}

export type dreamListResponse = defaultResponse<{
  share_dreams: DreamList[];
  total_page: number;
  total_size: number;
}>;
