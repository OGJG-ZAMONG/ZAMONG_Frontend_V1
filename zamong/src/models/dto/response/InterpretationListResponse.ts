import defaultResponse from "./defaultResponse";

export interface InterpretationDream {
  uuid: string;
  default_posting_image: string;
  title: string;
  dream_types: string[];
  updated_at: string;
  user: {
    uuid: string;
    id: string;
    profile: string;
  };
}

export interface InterpretationList {
  interpretation_dreams: InterpretationDream[];
  total_page: 1;
  total_size: 2;
}

type interpretationListResponse = defaultResponse<InterpretationList>;

export default interpretationListResponse;
