import styled from "@emotion/styled";
import { color } from "../../../../../style";
import { font } from "../../../../../style/font";

export const ModalContainer = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0px;
  left: 0px;
`;

export const ModalBack = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  position: absolute;
  top: 0px;
  left: 0px;
  user-select: none;
`;

export const ModalInner = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 16px;
  background-color: ${color.darkerGray};
  border-radius: 20px;
`;

export const ModalTitle = styled.div`
  font: ${font.body1};
  color: ${color.white};
  margin-bottom: 16px;
`;

