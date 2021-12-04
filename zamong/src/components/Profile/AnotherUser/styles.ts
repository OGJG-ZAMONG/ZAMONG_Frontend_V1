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

export const LineBox = styled.div`
  width: 1055px;
  height: 28px;
  display: flex;
  justify-content: space-between;
`;

export const Text = styled.span`
  cursor: pointer;
`;

export const NameBox = styled.p`
  font: ${font.body2};
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
  width: 484px;
  height: 58px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
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

export const FollowingBtn = styled.button`
  width: 91px;
  height: 32px;
  border: 1px solid ${color.white};
  border-radius: 120px;
  background-color: ${color.black};
  color: ${color.white};
  margin: 14px 0px 0px 15px;
  font: ${font.body2};
  cursor: pointer;
`;

export const FollowBtn = styled.div`
  width: 91px;
  height: 32px;
  border-radius: 120px;
  background-color: ${color.blue};
  color: ${color.white};
  margin: 14px 0px 0px 15px;
  text-align: center;
  font: ${font.body2};
  padding-top: 3px;
  cursor: pointer;
`;
