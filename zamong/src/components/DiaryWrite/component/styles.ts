import styled from "@emotion/styled";
import { color } from "../../../style/color";
import { font } from "../../../style/font";

export const Title = styled.div`
  font: ${font.body2};
  color: ${color.white};
`;

export const TitleContainer = styled.div`
  width: 125px;
`;

export const Container = styled.div`
  color: ${(props) => props.color} !important;
  display: flex;
`;

export const Subtitle = styled.div`
  color: ${color.lightGray};
  font: ${font.body2};
  user-select: none;
  cursor: pointer;
`;

export const TimePickerItem = styled(Subtitle)`
  color: unset;
`;

export const HeaderContainer = styled.div`
  display: flex;
`;
