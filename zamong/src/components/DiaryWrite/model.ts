export type State<T> = [T, (t: T) => void];

export const AM = "AM";
export const PM = "PM";

export type Time = {
  type: string;
  hour: number;
  minute: number;
};
