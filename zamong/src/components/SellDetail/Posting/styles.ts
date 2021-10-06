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

export const Photo = styled.div``;

export const ChatButton = styled.div`
  margin: 0 auto;
  margin-top: 48px;
  margin-bottom: 39px;
  padding: 12px 16px;
  text-align: center;
  border-radius: 10px;
  background-color: ${color.blue};
  color: ${color.white};
  font: ${font.subtitle};
`;
