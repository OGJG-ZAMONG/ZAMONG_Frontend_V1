import styled from "@emotion/styled";
import { color } from "../../../style/color";
import { font } from "../../../style/font";

export const PostingContainer = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  row-gap: 28px;
`;

export const Text = styled.div`
  color: ${color.white};
  font: ${font.body3};
`;

export const PhotoGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(11, 1fr);
  column-gap: 20px;
`;

export const Photo = styled.img`
  grid-column: 1/8;
  width: 100%;
  aspect-ratio: 4 / 3;
  object-fit: cover;
  border-radius: 10px;
`;