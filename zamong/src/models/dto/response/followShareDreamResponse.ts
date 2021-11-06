export interface followShareDreamResponse {
  status: number;
  timestamp: string;
  content: {
    collection_value: boolean;
    response: {
      share_dreams: [
        {
          uuid: string;
          default_posting_image: string;
          profile: string;
          title: string;
          lucy_count: number;
          dream_types: string[];
          share_datetime: string;
        }
      ];
      total_page: number;
      total_size: number;
    };
  };
}
