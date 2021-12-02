import defaultResponse from "./defaultResponse";

export interface interpretationDetail {
  uuid: string;
  title: string;
  content: string;
  updated_at: string;
  dream_types: string[];
  attachment_image: string;
  user: {
    uuid: string;
    id: string;
    profile: string;
  };
}

export type interpretationDetailResponse = defaultResponse<interpretationDetail>;
