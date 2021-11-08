export interface diaryWriteRequest {
  title: string;
  content: string;
  dream_types: string[];
  quality: string;
  sleep_begin_datetime: string;
  sleep_end_datetime: string;
}
