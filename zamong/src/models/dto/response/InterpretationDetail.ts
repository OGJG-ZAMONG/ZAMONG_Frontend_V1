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
  lucy_count: number;
  is_interpretation: boolean;
}>;

export interface InterpretationDetail {
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
  lucy_count: number;
  is_interpretation: boolean;
}
