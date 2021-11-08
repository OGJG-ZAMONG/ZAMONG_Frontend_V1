import { keyframes } from "@emotion/react";
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
  cursor: pointer;
  user-select: none;
`;

export const Label = styled.label`
  background-color: ${color.blue};
  border-radius: 100px;
  color: ${color.white};
  padding: 6px 16px;
  cursor: pointer;
  user-select: none;
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

export const PreviewContainer = styled.div`
  position: relative;
`;

const loading = keyframes`
  0%{
    background-color: ${color.darkerGray};
  }
  100%{
    background-color: ${color.darkGray};
  }
`;

export const PreviewImagecontainer = styled.div<{ isHover: boolean }>`
  position: absolute;
  top: 0px;
  transform: translateY(calc(-100% - 16px + ${(props) => (props.isHover ? 0 : 20)}%))
    translateX(-50%);
  left: 50%;
  opacity: ${(props) => (props.isHover ? 1 : 0)};
  border-radius: 10px;
  transition: all 0.25s ease-out;
  width: 300px;
  aspect-ratio: 3 / 2;
  pointer-events: none;
  background-color: ${color.darkerGray};
  box-shadow: 0px 0px 16px ${color.black}80;
  animation: ${loading} 1s infinite alternate;
`;

export const PreviewImage = styled.img`
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 10px;
  object-fit: cover;
  object-position: center;
`;
