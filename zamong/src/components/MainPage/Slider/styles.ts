import styled from "@emotion/styled";

export const Container = styled.div`
  position: relative;
  width: 100%;
  overflow: hidden;
`;

export const List = styled.div<{ size: number }>`
  display: grid;
  column-gap: 20px;
  grid-template-columns: repeat(${(props) => props.size}, 1fr);
`;
