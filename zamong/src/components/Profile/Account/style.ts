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
  margin-right: 10px;
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
  border: 1px solid ${color.white};
  background-color: ${color.black};
  font: ${font.body2};
  padding-top: 2px;
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
  font-size: 16px;
  padding-top: 2px;
  margin-left: 16px;
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
  font-size: 16px;
  padding-top: 2px;
  margin-left: 9px;
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
  font-size: 16px;
  padding-top: 2px;
`;

export const IdBox = styled.div``;

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
  border-bottom: 1px solid ${color.darkGray};
`;

export const IdText = styled.span`
  color: ${color.white};
  margin-right: 18px;
`;

export const inputId = styled.input`
  width: 247px;
  height: 30px;
  background: ${color.black};
  border-radius: 10px;
  border: none;
  color: ${color.white};
  outline: none;
  text-align: right;
  padding: 0px 16px;
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
  font-size: 16px;
  padding-top: 1px;
`;
