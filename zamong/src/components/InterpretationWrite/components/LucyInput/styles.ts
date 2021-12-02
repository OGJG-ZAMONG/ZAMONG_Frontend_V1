import styled from "@emotion/styled";
import { color } from "../../../../style/color";
import { font } from "../../../../style/font";

export const Input = styled.input`
  background-color: ${color.darkGray};
  border: 0;
  border-radius: 10px;
  outline: none;
  ::placeholder {
    color: ${color.gray};
    font: ${font.body3};
  }
  font: ${font.body3};
  color: ${color.white};
  padding: 6px;
  text-align: right;
  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
    display: none;
  }
`;

export const Won = styled.div`
  font: ${font.body3};
  color: ${color.white};
  margin-left: 4px;
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
`;
