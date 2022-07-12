import styled from "styled-components";
import blackLogo from "../assets/images/logos/black logo.png";
import whiteLogo from "../assets/images/logos/white logo.png";
import yellowLogo from "../assets/images/logos/yellow logo.png";

export const LOGO_COLORS = {
  BLACK: blackLogo,
  WHITE: whiteLogo,
  YELLOW: yellowLogo,
};

interface LogoProps {
  $color: string;
  $width: string;
  $height: string;
}

const Logo = styled.img.attrs((props: LogoProps) => ({
  src: props.$color,
  width: props.$width,
  height: props.$height,
}))<LogoProps>`
  width: inherit;
  max-width: ${({ $width }) => $width};
`;

export default Logo;
