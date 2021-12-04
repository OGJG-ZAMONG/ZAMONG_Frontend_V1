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
  width: 621px;
  height: 197px;
  margin-top: 74px;
  display: flex;
`;

export const ProfileBox = styled.div<{ img: string }>`
  width: 200px;
  height: 197px;
  background-size: cover;
  border-radius: 120px;
  box-sizing: border-box;
  background-image: url(${(props) => props.img});
`;

export const InfoBox = styled.div`
  width: 400px;
  height: 114px;
  box-sizing: border-box;
  margin: 40px 0px 0px 24px;
`;

export const NickNameText = styled.p`
  font: ${font.headline3};
  color: ${color.white};
`;

export const EmailText = styled.p`
  font: ${font.body2};
  color: ${color.white};
`;

export const OneLineBox = styled.div`
  width: 397px;
  height: 28px;
  display: flex;
  justify-content: space-between;
  span {
    font: ${font.body2};
    color: ${color.white};
  }
`;

export const Text = styled.span`
  cursor: pointer;
`;

export const LinkText = styled(Link)`
  cursor: pointer;
  text-decoration: none;
  font: ${font.body2};
  color: ${color.white};
`;

export const NameBox = styled.p`
  font: ${font.body2};
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
