import * as S from "./styles";
import LinkIcon from "../../assets/icons/link.svg";
import Github from "../../assets/icons/github.svg";
import Modal from "../DiaryWrite/component/Picker/Modal/Modal";
import { Link } from "react-router-dom";
import { useState } from "react";
const Footer = (): JSX.Element => {
  const [modal, setModal] = useState<boolean>(false);

  const copyrightClickHandler = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    setModal(true);
  };

  return (
    <>
      <S.FooterContainer>
        <S.Line />
        <S.Inner>
          <S.FooterTitle>
            <img alt="link" src={LinkIcon} />
            Links
          </S.FooterTitle>
          <S.Flex>
            <a href="https://github.com/OGJG-ZAMONG" target="_blank" rel="noreferrer">
              <S.FooterContentDiv>
                <img alt="github" src={Github} width="24" />
                Github 
              </S.FooterContentDiv>
            </a>
          </S.Flex>
          <S.Flex>
            <S.FooterContent to="/" onClick={copyrightClickHandler}>
              저작권 안내 
            </S.FooterContent>
          </S.Flex>
          <S.Flex>
            <S.FooterContent to="/" onClick={termClickHandler}>
              이용 약관 
            </S.FooterContent>
          </S.Flex>
        </S.Inner>
        <S.CopyRight>2021 Team 옹기종기 | Copyright ⓒ 자몽 Corp. All Rights Reserved.</S.CopyRight>
      </S.FooterContainer>
      {modal && (
        <Modal setModal={setModal} closeEvent={() => {}}>
          <S.Headline>저작권 안내</S.Headline>
          <S.Body>
            제공된 사진
            <br />
            <a href="https://www.freepik.com/vectors/abstract" target="_blank" rel="noreferrer">
              Abstract vector created by freepik - www.freepik.com
            </a>
            <br />
            <a href="https://www.freepik.com/vectors/abstract" target="_blank" rel="noreferrer">
              Abstract vector created by freepik - www.freepik.com
            </a>
            <br />
            <a href="https://www.freepik.com/vectors/abstract" target="_blank" rel="noreferrer">
              Abstract vector created by freepik - www.freepik.com
            </a>
          </S.Body>
        </Modal>
      )}
    </>
  );
};

export default Footer;
