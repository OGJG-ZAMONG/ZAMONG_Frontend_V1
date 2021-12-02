import defaultResponse from "./defaultResponse";

interface response {
  uuid: string;
  created_at: string;
  updated_at: string;
}

export type diaryWriteResponse = defaultResponse<response>;
