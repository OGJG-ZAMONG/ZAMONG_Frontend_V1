import { useEffect, useRef } from "react";
import PopupContent from "../../interface/PopupContent";
import * as S from "./styled";

interface PropsType {
  contents: PopupContent[];
  isActiveMore: boolean;
  setIsActiveMore: React.Dispatch<React.SetStateAction<boolean>>;
}

const PopupMenu = ({ contents, isActiveMore, setIsActiveMore }: PropsType) => {
  const moreRef = useRef<HTMLDivElement>(null);

  const onPopupClick = (e: MouseEvent) => {
    if (!moreRef.current) {
      return;
    }
      setIsActiveMore(!isActiveMore);
  };

  useEffect(() => {
    window.addEventListener("click", onPopupClick);
    return () => {
      window.removeEventListener("click", onPopupClick);
    };
  }, [isActiveMore]);

  return (
    <>
      {isActiveMore ? (
        <S.PopupBox ref={moreRef}>
          {contents.map((value, i) => {
            return (
              <S.PopupList key={i} onClick={value.callback}>
                {value.name}
              </S.PopupList>
            );
          })}
        </S.PopupBox>
      ) : (
        <></>
      )}
    </>
  );
};

export default PopupMenu;
