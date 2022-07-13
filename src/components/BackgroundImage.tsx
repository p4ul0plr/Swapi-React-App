import styled from "styled-components";

interface ImageProps {
  $backgroundImage: string | undefined;
}

export const BackgroundImage = styled.div<ImageProps>`
  background-image: url(${({ $backgroundImage }) => $backgroundImage});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  width: inherit;
  height: 100%;
`;
