import styled from "@emotion/styled";

export const Container = styled.div`
  position: relative;
  width: 100%;
  overflow: hidden;
`;

export const List = styled.div<{ x: number }>`
  display: flex;
  column-gap: 20px;
  transform: translateX(${(props) => props.x}px);
  transition: transform 0.5s cubic-bezier(0.19, 1, 0.22, 1);
`;
