import styled from "@emotion/styled";
import { color } from "../../style/color";
import { font } from "../../style/font";

export const Container = styled.div`
  margin-top: 16px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: ${color.white};
  font: ${font.body3};
`;

export const Title = styled.div`
  color: ${color.gray};
  font: ${font.subtitle};
`;

export const FileName = styled.div`
    
`;

export const Label = styled.label`
  background-color: ${color.blue};
  border-radius: 100px;
  color: ${color.white};
  padding: 6px 16px;
  cursor: pointer;
  &:hover {
    background-color: ${color.hoverBlue};
  }
`;

export const Input = styled.input`
  display: none;
`;

export const InputContainer = styled.div`
  display: flex;
  column-gap: 8px;
  align-items: center;
`;
