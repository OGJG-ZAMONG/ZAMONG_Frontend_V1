export interface myProfileResponse {
  status: number;
  timestamp: string;
  content: {
    collection_value: boolean;
    response: {
      uuid: string;
      name: string;
      email: string;
      id: string;
      profile: string;
      share_dream_count: number;
      lucy_count: number;
    };
  };
}
