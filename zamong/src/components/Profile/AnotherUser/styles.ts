import { color } from "../../../style/color";
import { font } from "../../../style/font";
import styled from "@emotion/styled";
import { Link } from "react-router-dom";

export const ProfileContent = styled.div`
  width: 1280px;
  padding-top: 90px;
  margin: 0 auto;
`;

export const TopBox = styled.div`
  width: 100%;
  margin-bottom: 50px;
`;

export const TopContent = styled.div`
  margin-top: 74px;
  width: 100%;
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
  display: flex;
  width: calc(100% - 228px);
  flex-direction: column;
  row-gap: 8px;
  margin-left: 24px;
  box-sizing: border-box;
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

export const LineBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

export const Text = styled.span`
  cursor: pointer;
`;

export const NameBox = styled.p`
  font: ${font.body3};
  color: ${color.white};
`;

export const FollowerBtn = styled.div`
  width: 100px;
  height: 100px;
`;

export const SelectionBox = styled.div`
  width: 100%;
  height: 58px;
  border-top: 1px solid ${color.darkGray};
`;

export const SelectionContent = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
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

export const Button = styled.button`
  padding: 6px 16px;
  border-radius: 120px;
  font: ${font.body3};
  color: ${color.white};
  outline: none;
  cursor: pointer;
`;

export const FollowingBtn = styled(Button)`
  border: 1px solid ${color.white};
  background-color: transparent;
  box-shadow: 0 0 1px 0 ${color.white} inset, 0 0 1px 0 ${color.white};
`;

export const FollowBtn = styled(Button)`
  background-color: ${color.blue};
  border: 0;
`;
