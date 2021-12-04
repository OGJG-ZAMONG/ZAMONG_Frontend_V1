import styled from "@emotion/styled";
import { color } from "../../style/color";

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 8px 0px;
`;

export const Img = styled.div`
  width: 36px;
  height: 36px;
  background-color: ${color.gray};
  border-radius: 50%;
`;

export const DivContainer = styled.div`
  display: flex;
  column-gap: 8px;
  align-items: center;
`;

export const Div = styled.div`
  border-radius: 5px;
  background-color: ${color.gray};
  width: 70px;
  height: 24px;
`;

export const Button = styled.div`
  border-radius: 120px;
  background-color: ${color.gray};
  width: 100px;
  height: 30px;
`;

export const Line = styled.div`
  width: 100%;
  height: 1px;
  background-color: ${color.darkGray};
  margin-top: 8px;
`;

export const Outer = styled.div`
  width: 100%;
`;
