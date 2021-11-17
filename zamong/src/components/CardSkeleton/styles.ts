import { css, keyframes } from "@emotion/react";
import styled from "@emotion/styled";
import { color } from "../../style/color";

export const Container = styled.div`
  width: 100%;
`;

export const Img = styled.div`
  width: 100%;
  background-color: ${color.gray};
  border-radius: 20px;
  aspect-ratio: 3 / 2;
  margin-bottom: 16px;
`;

export const Title = styled.div`
  width: 100%;
  height: 20px;
  background-color: ${color.gray};
  margin-bottom: 8px;
  border-radius: 5px;
`;

export const TitleSecond = styled.div`
  width: 40%;
  height: 20px;
  background-color: ${color.gray};
  border-radius: 5px;
`;
