import * as S from "./styles";
import { DownChevron } from "../../../../../../assets";

import { MouseEvent, MouseEventHandler, useEffect, useRef, useState } from "react";

type Props = {
  header: JSX.Element;
  content: JSX.Element;
  padding: number;
};

const Accordion = ({ header, content, padding }: Props): JSX.Element => {
  const [isActive, setIsActive] = useState(false);
  const parentRef = useRef<HTMLDivElement>(null);
  const childRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (parentRef.current === null || childRef.current === null) {
      return;
    }
    if (isActive) {
      parentRef.current.style.height = `${childRef.current.clientHeight}px`;
      parentRef.current.style.opacity = "1";
    } else {
      parentRef.current.style.height = "0";
      parentRef.current.style.opacity = "0";
    }
  }, [isActive]);

  return (
    <S.Container>
      <S.HeaderWrapper
        onClick={() => {
          setIsActive(!isActive);
        }}
      >
        <S.Header>{header}</S.Header>
        <S.Button rotate={isActive ? 180 : 0} alt="down" src={DownChevron} />
      </S.HeaderWrapper>
      <S.ContentWrapper padding={isActive ? padding : 0} ref={parentRef}>
        <S.Content ref={childRef}>{content}</S.Content>
      </S.ContentWrapper>
    </S.Container>
  );
};

export default Accordion;
