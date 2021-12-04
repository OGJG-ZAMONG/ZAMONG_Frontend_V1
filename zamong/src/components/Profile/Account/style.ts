import styled from "@emotion/styled";
import { Link } from "react-router-dom";
import { font } from "../../../style/font";
import { color } from "../../../style/color";

export const Content = styled.div`
  width: 100%;
  margin-top: 68px;
`;

export const ProfileBox = styled.div`
  width: 1279px;
  height: 119px;
  div {
    display: flex;
    justify-content: space-between;
  }
`;

export const TitleText = styled.p`
  font: ${font.headline3};
  color: ${color.white};
  margin-bottom: 44px;
`;

export const SubTitle = styled.label`
  font: ${font.body2};
  color: ${color.white};
`;

export const FileBox = styled.div`
  display: inline-block;
  align-items: center;
  border-radius: 120px;
`;

export const FileText = styled.label`
  width: 62px;
  height: 31px;
  color: ${color.white};
  cursor: pointer;
  border-radius: 120px;
  text-align: center;
  padding-top: 2px;
  border: 1px solid ${color.white};
  background-color: ${color.black};
  font: ${font.body2};
  box-shadow: 0 0 1px 0 ${color.white} inset, 0 0 1px 0 ${color.white};
`;

export const FileBtn = styled.input`
  position: absolute;
  clip: rect(0, 0, 0, 0);
  border: 0;
`;

export const ChangeBtn = styled.div`
  width: 62px;
  height: 31px;
  border: 1px solid ${color.white};
  background-color: ${color.black};
  border-radius: 120px;
  color: ${color.white};
  cursor: pointer;
  display: inline-block;
  text-align: center;
  align-items: center;
  padding-top: 2px;
  font: ${font.body2};
  margin-left: 6px;
  box-shadow: 0 0 1px 0 ${color.white} inset, 0 0 1px 0 ${color.white};
`;

export const CancelBtn = styled.div`
  width: 62px;
  height: 31px;
  border: 1px solid ${color.red};
  background-color: black;
  border-radius: 120px;
  color: ${color.red};
  cursor: pointer;
  display: inline-block;
  text-align: center;
  align-items: center;
  font: ${font.body2};
  padding-top: 2px;
  margin-left: 9px;
  box-shadow: 0 0 1px 0 ${color.red} inset, 0 0 1px 0 ${color.red};
`;

export const ChangePwBtn = styled(Link)`
  width: 62px;
  height: 31px;
  border: 1px solid ${color.white};
  background-color: ${color.black};
  border-radius: 120px;
  color: ${color.white};
  text-decoration: none;
  cursor: pointer;
  display: inline-block;
  text-align: center;
  align-items: center;
  font: ${font.body2};
  padding-top: 2px;
  box-shadow: 0 0 1px 0 ${color.white} inset, 0 0 1px 0 ${color.white};
`;

export const AccountBox = styled.div`
  width: 1279px;
  height: 240px;
  margin: 50px 0px 180px 0px;
`;

export const Box = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 18px;
  padding-bottom: 10px;
  text-align: center;
  align-items: center;
  border-bottom: 1px solid ${color.darkGray};
`;

export const IdText = styled.span`
  color: ${color.white};
  margin-right: 18px;
`;

export const inputId = styled.input`
  width: 247px;
  height: 28px;
  background: ${color.darkGray};
  border-radius: 10px;
  border: none;
  color: ${color.white};
  outline: none;
  text-align: right;
  padding: 0px 16px;
  animation: 0.9s ease-in-out loadEffect1;
  @keyframes loadEffect1 {
    0% {
      opacity: 0;
    }
    30% {
      left: 120px;
    }
    50% {
      left: 150px;
    }
    80% {
      left: 180px;
    }
    100% {
      opacity: 1;
      left: 200px;
    }
  }
  :hover {
    outline: none;
    border: none;
  }
`;

export const DeleteText = styled.span`
  color: ${color.red};
  font: ${font.body2};
`;

export const DeleteBtn = styled.button`
  width: 62px;
  height: 31px;
  border: 1px solid ${color.red};
  background-color: ${color.black};
  border-radius: 120px;
  color: ${color.red};
  cursor: pointer;
  font: ${font.body2};
  padding-top: 1px;
  box-shadow: 0 0 1px 0 ${color.red} inset, 0 0 1px 0 ${color.red};
`;
