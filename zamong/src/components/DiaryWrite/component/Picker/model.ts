export const HEIGHT = 36;
export const range = (min: number, max: number): Array<number> => {
  var returnArray: Array<number> = new Array<number>();

  for (var i: number = min; i < max; ++i) {
    returnArray.push(i);
  }

  return returnArray;
};

export const getMaxDate = (year: number, month: number): number => {
  var temp: Date = new Date(year, month, 0);
  return temp.getDate();
};

export const toString = (value: number | string): string => {
  return value + "";
};

export const toNumber = (value: string | number): number => {
  return parseInt(value + "");
};
