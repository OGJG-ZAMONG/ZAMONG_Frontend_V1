import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { color } from "../../style/color";
import { font } from "../../style/font";

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  font: ${font.body3};
  padding: 8px 0px;
`;

export const ProfileImage = styled.img`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  object-fit: cover;
  object-position: center;
`;

export const ProfileContainer = styled.div`
  display: flex;
  column-gap: 16px;
  align-items: center;
  color: ${color.white};
`;

export const Button = styled.button`
  padding: 6px 16px;
  color: ${color.white};
  cursor: pointer;
  font: ${font.body3};
  border-radius: 120px;
  &:disabled {
    filter: brightness(0.8);
  }
`;

export const BlueButton = styled(Button)`
  border: 0;
  background-color: ${color.blue};
`;

export const BorderButton = styled(Button)`
  border: 1px solid ${color.white};
  background-color: transparent;
  box-shadow: 0 0 1px 0 ${color.white} inset, 0 0 1px 0 ${color.white};
`;

export const ButtonContainer = styled.div`
  display: flex;
  column-gap: 24px;
  align-items: center;
  color: ${color.lightGray};
`;

export const Line = styled.div`
  width: 100%;
  height: 1px;
  margin-top: 8px;
  background-color: ${color.darkGray};
`;

export const Outer = styled.div`
  width: 100%;
`;
