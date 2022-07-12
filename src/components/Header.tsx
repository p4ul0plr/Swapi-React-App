import styled from "styled-components";
import galaxyBackground from "../assets/images/backcgrounds/galaxybackground.png";
import IconsList from "./IconsList";
import Logo, { LOGO_COLORS } from "./Logo";
import Margin from "./Margin";
import Search from "./Search";

interface HeaderColStyleProps {
  $background?: string;
  $directionX?: string;
  $directionY?: string;
  $maxWidth?: string;
}

interface HeaderStyleProps {
  $backgroundImage?: string;
}

const HeaderStyle = styled.header<HeaderStyleProps>`
  display: flex;
  flex-direction: row;
  width: 100%;
  background-image: url(${({ $backgroundImage }) => $backgroundImage});
  background-size: contain;
  background-position: center;
  background-repeat: repeat;
`;

const HeaderColStyle = styled.div<HeaderColStyleProps>`
  display: flex;
  flex-direction: row;
  justify-content: ${({ $directionX }) => $directionX};
  align-items: ${({ $directionY }) => $directionY};
  padding: 15px;
  width: 100%;
  max-width: ${({ $maxWidth }) => ($maxWidth ? $maxWidth : "100%")};
  height: auto;
  background-color: ${({ $background }) => $background};
`;

function Header() {
  return (
    <HeaderStyle $backgroundImage={galaxyBackground}>
      <HeaderColStyle $maxWidth="20%">
        <IconsList />
      </HeaderColStyle>
      <HeaderColStyle $maxWidth="60%" $directionY="center" $directionX="center">
        <Margin $y="20px">
          <Logo $width="300px" $height="auto" $color={LOGO_COLORS.WHITE} />
        </Margin>
      </HeaderColStyle>
      <HeaderColStyle $maxWidth="20%" $directionX="end">
        <Search $placeholder="SEARCH ..." />
      </HeaderColStyle>
    </HeaderStyle>
  );
}

export default Header;
