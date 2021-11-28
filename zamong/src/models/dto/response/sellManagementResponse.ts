export interface myOnSaleManagement {
  status: number;
  timestamp: string;
  content: {
    collection_value: boolean;
    response: {
      sell_dreams: [
        {
          uuid: string;
          default_posting_image: string;
          title: string;
          dream_types: Array<string>;
          updated_at: string;
          cost: number;
          user: {
            uuid: string;
            id: string;
            profile: string;
          };
        }
      ];
    };
  };
}

export interface mySoldOutManagement {
  status: number;
  timestamp: string;
  content: {
    collection_value: boolean;
    response: {
      sell_dreams: [
        {
          uuid: string;
          default_posting_image: string;
          title: string;
          dream_types: Array<string>;
          updated_at: string;
          cost: number;
          user: {
            uuid: string;
            id: string;
            profile: string;
          };
        }
      ];
    };
  };
}

export interface sellDreams {
  uuid: string;
  default_posting_image: string;
  title: string;
  dream_types: Array<string>;
  updated_at: string;
  cost: number;
  user: {
    uuid: string;
    id: string;
    profile: string;
  };
}
