import styled from "@emotion/styled";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  z-index: -1;
  position: fixed;
  top: 0px;
  left: 0px;
  overflow: hidden;
`;

export const Inner = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  transition: top 1s cubic-bezier(0.075, 0.82, 0.165, 1);
`;

export const Delusional = styled.div<{ left: number; top: number; isActive: boolean }>`
  left: ${(props) => props.left}%;
  top: ${(props) => props.top}px;
  position: absolute;
  contain: paint;
  transform: translate(-50%, -${(props) => (props.isActive ? 50 : 30)}%);
  opacity: ${(props) => (props.isActive ? 1 : 0)};
  transition: transform 1s cubic-bezier(0.075, 0.82, 0.165, 1),
    opacity 1s cubic-bezier(0.075, 0.82, 0.165, 1);
  img {
    object-fit: cover;
    object-position: center;
  }
`;
