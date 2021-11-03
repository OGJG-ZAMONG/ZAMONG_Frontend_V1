import { useEffect, useState } from "react";

interface PropsType {
  from: Date;
  interval: number;
}

const ElapsedTime = ({ from, interval }: PropsType): JSX.Element => {
  const [pastTime, setPastTime] = useState<string>("");

  const changeTime = () => {
    const nowDate = new Date(Date.now());
    const diff = Math.abs(from.getTime() - nowDate.getTime());
    const minutes = Math.floor(diff / 1000 / 60);
    const hour = Math.floor(minutes / 60);
    const minute = minutes % 60;
    const day = Math.floor(hour / 24);

    const dayString = day > 0 ? `${day}일 ` : "";
    const hourString = hour > 0 ? `${hour}시간 ` : "";

    setPastTime(`${dayString}${hourString}${minute}분`);
  };

  useEffect(() => {
    const timeInterval = setInterval(changeTime, interval);

    return () => clearInterval(timeInterval);
  }, []);
  return <span>{pastTime}</span>;
};

export default ElapsedTime;
