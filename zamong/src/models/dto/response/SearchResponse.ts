import defaultResponse from "./defaultResponse";
export interface UserSearchResponse {
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
