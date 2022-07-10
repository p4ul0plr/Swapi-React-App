import styled from "styled-components";
import { sizes } from "../styles/themes/sizes";

interface TextProps {
  $size: string;
  $color: string;
  $center?: boolean;
}

const Text = styled.p<TextProps>`
  font-size: ${({ $size }) => $size};
  color: ${({ $color }) => $color};
  text-align: ${({ $center }) => ($center ? "center" : "inherit")};
  width: 100%;
`;

export default Text;
