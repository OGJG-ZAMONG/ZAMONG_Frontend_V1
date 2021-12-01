import styled from "@emotion/styled";
import { font } from "../../../style/font";
import { color } from "../../../style/color";

export const LockIcon = styled.img`
  height: 24px;
  width: 24px;
  padding: 5px;
  border-radius: 10px;
  background-color: ${color.white};
  backdrop-filter: blur(10px);
  background: rgb(0, 0, 0, 0.4);
  border-radius: 5px;
  z-index: 1;
`;
