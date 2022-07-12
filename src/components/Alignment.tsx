import styled from "styled-components";

interface AlignmentProps {
  $directionX?: string;
  $directionY?: string;
}

export const Alignment = styled.div<AlignmentProps>`
  display: flex;
  justify-content: ${({ $directionX }) => $directionX};
  align-items: ${({ $directionY }) => $directionY};
`;
