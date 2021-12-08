import { useLayoutEffect, useState } from "react";
import Bronze from "../../../assets/Badge/Bronze.svg";
import Silver from "../../../assets/Badge/Silver.svg";
import Gold from "../../../assets/Badge/Gold.svg";
import Diamond from "../../../assets/Badge/Diamond.svg";
import Master from "../../../assets/Badge/Master.svg";

interface PropsType {
  count: number;
}

const Badge = ({ count }: PropsType) => {
  const BRONZE = "BRONZE";
  const SILVER = "SILVER";
  const GOLD = "GOLD";
  const DIAMOND = "DIAMOND";
  const MASTER = "MASTER";

  const images = {
    BRONZE: Bronze,
    SILVER: Silver,
    GOLD: Gold,
    DIAMOND: Diamond,
    MASTER: Master,
  };

  const [state, setState] = useState<string | null>(null);

  useLayoutEffect(() => {}, [count]);
};

export default Badge;
