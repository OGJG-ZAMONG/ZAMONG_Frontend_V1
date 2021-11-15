export interface sellDreamDetailResponse {
  status: number;
  timestamp: string;
  content: {
    collection_value: boolean;
    response: {
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
    };
  };
}
