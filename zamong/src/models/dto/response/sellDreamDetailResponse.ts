import defaultResponse from "./defaultResponse";

export type sellDreamDetailResponse = defaultResponse<{
  uuid: string;
  title: string;
  content: string;
  updated_at: string;
  dream_types: string[];
  attachment_image: string;
  cost: number;
  status: string;
  user: {
    uuid: string;
    id: string;
    profile: string;
  };
}>;
