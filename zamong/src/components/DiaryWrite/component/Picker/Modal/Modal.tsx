import React, { useEffect } from "react";
import * as S from "./styles";

type PropsType = {
  children: React.ReactNode;
  setModal: React.Dispatch<React.SetStateAction<boolean>>;
  closeEvent: () => void;
};

const Modal = ({ children, setModal, closeEvent }: PropsType): JSX.Element => {
  const checkESC = (e: KeyboardEvent) => {
    if (e.keyCode === 27) {
      closeEvent();
      setModal(false);
    }
  };

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

  useEffect(() => {
    window.addEventListener("keydown", checkESC);

    return () => {
      window.removeEventListener("keydown", checkESC);
    };
  }, [closeEvent]);

  return (
    <>
      <S.ModalContainer>
        <S.ModalBack
          onClick={() => {
            setModal(false);
            closeEvent();
          }}
        />
        <S.ModalInner>{children}</S.ModalInner>
      </S.ModalContainer>
    </>
  );
};

export default Modal;
