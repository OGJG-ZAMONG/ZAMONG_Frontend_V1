export interface dreamDetail {
  uuid: string;
  title: string;
  content: string;
  updated_at: string;
  dream_types: string[];
  attachment_image: string;
  quality: string;
  is_shared: boolean;
  sleep_begin_date_time: string;
  sleep_end_date_time: string;
  share_date_time: string | null;
  lucy_count: number;
  user: {
    uuid: string;
    id: string;
    profile: string;
  };
}

export interface dreamDetailResponse {
  status: number;
  timestamp: string;
  content: {
    collection_value: boolean;
    response: dreamDetail;
  };
}
