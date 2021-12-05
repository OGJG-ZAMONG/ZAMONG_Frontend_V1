export interface myOnSaleManagement {
  status: number;
  timestamp: string;
  content: {
    collection_value: boolean;
    response: {
      sell_dreams: SellDream[];
      total_page: number;
      total_size: number;
    };
  };
}

export interface SellDream {
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

export interface mySoldOutManagement {
  status: number;
  timestamp: string;
  content: {
    collection_value: boolean;
    response: {
      sell_dreams: SellDream[];
      total_page: number;
      total_size: number;
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
