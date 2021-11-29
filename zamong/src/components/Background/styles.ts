import styled from "@emotion/styled";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  z-index: -1;
  background-color: red;
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
