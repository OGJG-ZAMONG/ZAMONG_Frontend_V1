import styled from "@emotion/styled";
import { DreamImageContainer } from "..";
import { color } from "../../../style/color";

export const ContentContainer = styled.div`
  overflow: hidden;
  text-overflow: ellipsis;
  max-height: calc(100%);
  height: calc(100%);
  color: ${color.black};
  display: inline-block;
  word-break: keep-all;
`;

export const Image = styled(DreamImageContainer)`
  display: inline-block;
`;
