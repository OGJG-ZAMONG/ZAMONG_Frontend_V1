import defaultResponse from "./defaultResponse";

export type InterpretationDetailResponse = defaultResponse<{
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
}>;
