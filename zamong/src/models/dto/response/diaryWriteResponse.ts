export interface diaryWriteResponse {
  status: number;
  timestamp: string;
  content: {
    collection_value: boolean;
    response: {
      uuid: string;
      created_at: string;
      updated_at: string;
    };
  };
}
