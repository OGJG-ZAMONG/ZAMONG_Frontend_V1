import { color } from "../../style/color";
import { font } from "../../style/font";
import styled from "@emotion/styled";
import { Link } from "react-router-dom";

export const ProfileContent = styled.div`
  width: 1280px;
  padding-top: 90px;
  margin: 0 auto;
`;

export const TopBox = styled.div`
  width: 100%;
  height: 321px;
`;

export const TopContent = styled.div`
  margin-top: 74px;
  display: flex;
  align-items: center;
`;

export const ProfileBox = styled.div<{ img: string }>`
  width: 200px;
  height: 200px;
  background-size: cover;
  border-radius: 120px;
  box-sizing: border-box;
  background-image: url(${(props) => props.img});
`;

export const InfoBox = styled.div`
  box-sizing: border-box;
  margin-left: 28px;
  display: flex;
  flex-direction: column;
  row-gap: 8px;
`;

export const NickNameText = styled.p`
  font: ${font.headline3};
  color: ${color.white};
`;

export const EmailText = styled.p`
  font: ${font.body3};
  color: ${color.white};
`;

export const OneLineBox = styled.div`
  display: flex;
  column-gap: 16px;
  span {
    font: ${font.body3};
    color: ${color.white};
  }
`;

export const Text = styled.span`
  cursor: pointer;
`;

export const LinkText = styled(Link)`
  cursor: pointer;
  text-decoration: none;
  font: ${font.body3};
  color: ${color.white};
`;

export const NameBox = styled.p`
  font: ${font.body3};
  color: ${color.white};
`;

export const SelectionBox = styled.div`
  width: 100%;
  height: 58px;
  border-top: 1px solid ${color.darkGray};
`;

export const SelectionContent = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  column-gap: 120px;
  margin-top: 16px;
`;

export const ChooseBox = styled.div<{ isActive: boolean }>`
  color: ${(props) => (props.isActive ? color.white : color.darkGray)};
  img {
    ${(props) =>
      !props.isActive &&
      "filter: invert(41%) sepia(6%) saturate(205%) hue-rotate(202deg) brightness(86%) contrast(80%);"}
  }
  cursor: pointer;
  display: flex;
  align-items: center;
  column-gap: 8px;
`;
