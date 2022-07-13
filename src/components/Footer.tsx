import styled from "styled-components";
import { colors } from "../styles/themes/colors";
import { sizes } from "../styles/themes/sizes";
import { Alignment } from "./Alignment";
import { Column } from "./Column";
import IconsList from "./IconsList";
import Margin from "./Margin";
import Text from "./Text";

export const FooterStyle = styled.footer`
  padding: 15px;
  background-color: ${colors.SECONDARY};
  border: 1px solid ${colors.BORDER};
`;

function Footer() {
  return (
    <FooterStyle>
      <Column>
        <Margin $top="20px">
          <Text $center $size={sizes.XS} $color={colors.WHITE}>
            2022, Swapi React App © Todos os direitos reservados a Paulo Roberto
            da Silva Nobrega
          </Text>
        </Margin>
        <Alignment $directionX="center" $directionY="center">
          <Margin $top="20px">
            <IconsList />
          </Margin>
        </Alignment>
      </Column>
    </FooterStyle>
  );
}

export default Footer;
