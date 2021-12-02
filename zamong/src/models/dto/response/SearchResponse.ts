export interface UserSearchResponse {
  status: number;
  timestamp: string;
  content: {
    collection_value: boolean;
    response: {
      users: [
        {
          uuid: string;
          id: string;
          profile: string;
          is_following: boolean;
          follow_datetime: string;
        }
      ];
    };
  };
}

export interface ShareSearchResponse {
  status: number;
  timestamp: string;
  content: {
    collection_value: boolean;
    response: {
      share_dreams: [
        {
          uuid: string;
          default_posting_image: string;
          user: {
            uuid: string;
            id: string;
            profile: string;
          };
          title: string;
          lucy_count: number;
          dream_types: string[];
          share_datetime: string;
        }
      ];
      total_page: null;
      total_size: null;
    };
  };
}

export interface interpretationSearchResponse {
  status: number;
  timestamp: string;
  content: {
    collection_value: boolean;
    response: {
      interpretation_dreams: [
        {
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
      ];
      total_page: null;
      total_size: null;
    };
  };
}

export interface sellSearchResponse {
  status: number;
  timestamp: string;
  content: {
    collection_value: true;
    response: {
      sell_dreams: [
        {
          uuid: string;
          default_posting_image: string;
          title: string;
          dream_types: string[];
          updated_at: string;
          cost: number;
          user: {
            uuid: string;
            id: string;
            profile: string;
          };
        }
      ];
      total_page: null;
      total_size: null;
    };
  };
}
