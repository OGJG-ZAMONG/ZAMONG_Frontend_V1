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

export interface dreamListResponse {
  status: 200;
  timestamp: "2021-11-03T14:14:42.773061";
  content: {
    collection_value: true;
    response: {
      share_dreams: DreamList[];
      total_page: 1;
      total_size: 2;
    };
  };
}
