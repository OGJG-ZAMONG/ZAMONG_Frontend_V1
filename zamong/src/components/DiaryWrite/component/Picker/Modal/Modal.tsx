import React from "react";
import * as S from "./styles";

type PropsType = {
  children: React.ReactNode;
  setModal: React.Dispatch<React.SetStateAction<boolean>>;
};

const Modal = ({ children, setModal }: PropsType): JSX.Element => {
  return (
    <>
      <S.ModalContainer>
        <S.ModalBack onClick={() => setModal(false)} />
        <S.ModalInner>{children}</S.ModalInner>
      </S.ModalContainer>
    </>
  );
};

export default Modal;
