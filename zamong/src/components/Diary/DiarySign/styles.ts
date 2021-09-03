import styled from "@emotion/styled";
import { rectangle } from "../../../assets";

export const Container = styled.div`
  width: 291px;
  height: 250px;
  border-radius: 20px;
  margin: 16px 8px;
  display: inline-block;
  cursor: pointer;
`;

export const RectangleContainer = styled.div`
   width: 291px;
   height: 194px;
   display: flex;
   background-image: url(${rectangle});
`;

export const RectangleImage = styled.img`
  width: 291px;
  height: 194px;
`;

export const SecureImage = styled.img`
   width: 18.15px;
   height: 24px;
   z-index: 99;
   margin: 145px 0 0 25px;
`;

export const RectangleText = styled.div`
   width: 62px;
   height: 20px;
   margin: 150px 0 0 150px; 
   color: black;
`;

export const Description = styled.div`
  font-family: Spoqa Han Sans Neo;
  font-size: 16px;
  line-height: 20px;
  margin: 16px;
`;
