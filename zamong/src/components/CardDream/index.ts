import styled from "@emotion/styled";
import { font } from "../../style/font";
import { color } from "../../style/color";
import { Link } from "react-router-dom";

export const DreamCardContainer = styled(Link)`
  width: 100%;
  outline: none;
  text-decoration: none;
  contain: paint;
  &:hover {
    div:first-of-type {
      &::after {
        transform: scale(1.1);
      }
    }
  }
`;

export const DreamImageContainer = styled.div<{ img: any }>`
  width: 100%;
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  box-sizing: border-box;
  aspect-ratio: 3 / 2;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  border-radius: 20px;
  padding: 24px;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  position: relative;
  overflow: hidden;
  &::after {
    will-change: transform;
    content: "";
    border-radius: 20px;
    position: absolute;
    z-index: 0;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-image: url(${(props) => props.img});
    background-size: cover;
    transform-origin: center;
    transition: transform 1s cubic-bezier(0.075, 0.82, 0.165, 1);
  }
`;

export const DreamTitle = styled.div`
  margin-top: 16px;
  font: ${font.body3};
  color: ${color.white};
`;

export const DiaryDate = styled.div`
  height: 24px;
  font: ${font.description};
  background-color: ${color.black};
  backdrop-filter: blur(10px);
  color: ${color.white};
  background: rgb(0, 0, 0, 0.4);
  padding: 3px 5px;
  border-radius: 5px;
  z-index: 1;
`;
