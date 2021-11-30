import styled from "@emotion/styled";
import { font } from "../../../style/font";

export const ContentInner = styled.div`
  width: 100%;
  display: flex;
  row-gap: 28px;
  flex-direction: column;
`;

export const Subtitle = styled.div`
  font: ${font.headline3};
`;

export const ModalContainer = styled.div`
  max-height: 80vh;
  overflow-y: auto;
  -ms-overflow-style: none;
  scrollbar-width: none;
  border-radius: 20px 20px 0px 0px;
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const Image = styled.img`
  width: 100%;
  aspect-ratio: 3 / 2;
  object-fit: cover;
  object-position: center;
  border-radius: 20px;
`;

export const Title = styled.div`
  font: ${font.headline2};
  margin-top: 16px;
  margin-bottom: 8px;
`;

export const Content = styled.div`
  line-break: auto;
`;
