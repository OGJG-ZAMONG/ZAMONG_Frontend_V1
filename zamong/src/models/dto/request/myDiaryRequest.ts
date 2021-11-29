import { shareDreamWithSortRequest } from "./shareDreamWithSortRequest";

export interface myDiaryRequest extends shareDreamWithSortRequest {
  shared: boolean;
}
