import { useLayoutEffect, useState } from "react";

interface PropsType {
  count: number;
}

const Badge = ({ count }: PropsType) => {
  const BRONZE = "BRONZE";
  const SILVER = "SILVER";
  const GOLD = "GOLD";
  const BLUE = "BLUE";
  const RED = "RED";

    

  const [state, setState] = useState<string | null>(null);

  useLayoutEffect(() => {}, [count]);
};

export default Badge;
