import styled from "styled-components";

interface ColumnProps {
  $directionX?: string;
  $directionY?: string;
  $maxWidth?: string;
}

export const Column = styled.div<ColumnProps>`
  display: flex;
  flex-direction: column;
  justify-content: ${({ $directionY }) => $directionY};
  align-items: ${({ $directionX }) => $directionX};
  width: 100%;
  max-width: ${({ $maxWidth }) => ($maxWidth ? $maxWidth : "100%")};
  height: auto;
`;
