export type State<T> = {
  state: T;
  setState: React.Dispatch<React.SetStateAction<T>>;
};

export type Time = {
  type: string;
  hour: number;
  minute: number;
};
export const AM = "AM";
export const PM = "PM";

export type Code = {
  code: string;
  name: string;
};
