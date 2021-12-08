import { useLayoutEffect, useState } from "react";
import Bronze from "../../../assets/Badge/Bronze.svg";
import Silver from "../../../assets/Badge/Silver.svg";
import Gold from "../../../assets/Badge/Gold.svg";
import Diamond from "../../../assets/Badge/Diamond.svg";
import Master from "../../../assets/Badge/Master.svg";
import * as S from "./styles";

interface PropsType {
  count: number;
}

const Badge = ({ count }: PropsType) => {
  const BRONZE = "BRONZE";
  const SILVER = "SILVER";
  const GOLD = "GOLD";
  const DIAMOND = "DIAMOND";
  const MASTER = "MASTER";

  type StateType = typeof BRONZE | typeof SILVER | typeof DIAMOND | typeof MASTER | typeof GOLD;

  const images = {
    BRONZE: Bronze,
    SILVER: Silver,
    GOLD: Gold,
    DIAMOND: Diamond,
    MASTER: Master,
  };

  const [state, setState] = useState<StateType | null>(null);

  useLayoutEffect(() => {
    if (count >= 100) {
      setState(MASTER);
    } else if (count >= 50) {
      setState(DIAMOND);
    } else if (count >= 30) {
      setState(GOLD);
    } else if (count >= 10) {
      setState(SILVER);
    } else {
      setState(BRONZE);
    }
  }, [count]);

  return <>{state && <S.BadgeImage src={images[state]} />}</>;
};

export default Badge;
