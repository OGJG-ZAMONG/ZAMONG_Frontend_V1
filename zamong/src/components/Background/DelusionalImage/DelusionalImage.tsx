import { useEffect, useRef, useState } from "react";
import * as S from "../styles";

interface PropsType {
  url: Promise<any>;
  left: number;
  top: number;
}

const DelusionalImage = ({ left, top, url }: PropsType): JSX.Element => {
  const [isActive, setIsActive] = useState<boolean>(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const [imgUrl, setImgUrl] = useState<string>("");

  useEffect(() => {
    url.then((value) => {
      setImgUrl(value.default);
      setIsActive(true);
    });
  }, [isActive]);

  return (
    <S.Delusional ref={containerRef} left={left} top={top} isActive={isActive}>
      <img alt="Delusional" src={imgUrl} />
    </S.Delusional>
  );
};

export default DelusionalImage;
