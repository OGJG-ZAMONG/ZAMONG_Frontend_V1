export default interface defaultResponse<T> {
  status: number;
  timestamp: string;
  content: {
    collection_value: boolean;
    response: T;
  };
}
