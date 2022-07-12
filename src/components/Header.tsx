import styled from "styled-components";
import galaxyBackground from "../assets/images/backcgrounds/galaxybackground.png";
import { Column } from "./Column";
import { Container } from "./Container";
import IconsList from "./IconsList";
import Logo, { LOGO_COLORS } from "./Logo";
import Margin from "./Margin";
import Menu from "./Menu";
import { Row } from "./Row";
import Search from "./Search";
import SubMenu from "./SubMenu";

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
  background-size: cover;
  background-position: center;
  background-repeat: repeat;

  /* position: sticky;
  top: 0;
  left: 0; */
`;

const HeaderColStyle = styled.div<HeaderColStyleProps>`
  display: flex;
  flex-direction: column;
  justify-content: ${({ $directionY }) => $directionY};
  align-items: ${({ $directionX }) => $directionX};
  width: 100%;
  max-width: ${({ $maxWidth }) => ($maxWidth ? $maxWidth : "100%")};
  height: auto;
  background-color: ${({ $background }) => $background};
`;

function Header() {
  return (
    <HeaderStyle $backgroundImage={galaxyBackground}>
      <Column>
        <Row>
          <HeaderColStyle $maxWidth="20%" $directionY="center">
            <Container>
              <IconsList />
            </Container>
          </HeaderColStyle>
          <HeaderColStyle
            $maxWidth="60%"
            $directionY="center"
            $directionX="center"
          >
            <Container>
              <Margin $y="20px">
                <Logo
                  $width="300px"
                  $height="auto"
                  $color={LOGO_COLORS.WHITE}
                />
              </Margin>
            </Container>
          </HeaderColStyle>
          <HeaderColStyle
            $maxWidth="20%"
            $directionY="center"
            $directionX="end"
          >
            {/* <Search $placeholder="SEARCH ..." /> */}
            {/* <Margin $top="10px">
            </Margin> */}
            <Container>
              <SubMenu />
            </Container>
          </HeaderColStyle>
        </Row>
        <Row>
          <Menu />
        </Row>
      </Column>
    </HeaderStyle>
  );
}

export default Header;
