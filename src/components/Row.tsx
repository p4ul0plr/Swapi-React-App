import styled from "styled-components";

interface RowProps {
  $directionX?: string;
  $directionY?: string;
  $maxWidth?: string;
}

export const Row = styled.div<RowProps>`
  display: flex;
  flex-direction: row;
  justify-content: ${({ $directionX }) => $directionX};
  align-items: ${({ $directionY }) => $directionY};
  width: 100%;
  max-width: ${({ $maxWidth }) => ($maxWidth ? $maxWidth : "100%")};
  height: auto;
`;
