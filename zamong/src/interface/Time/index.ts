export const AM = "AM";
export const PM = "PM";

export default interface Time {
  type: string;
  hour: number;
  minute: number;
}
