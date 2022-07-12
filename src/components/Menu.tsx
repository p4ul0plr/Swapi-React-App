import { NavLinkStyle } from "./NavLinkStyle";
import styled from "styled-components";
import { colors } from "../styles/themes/colors";
import { Alignment } from "./Alignment";

export const MenuStyled = styled.div`
  width: 100%;
  background-color: ${colors.SECONDARY};
  border: 1px solid ${colors.BORDER};

  li {
    list-style-type: none;
    float: left;
    padding: 10px 20px;
    background-color: ${colors.SECONDARY};
    border-left: 1px solid ${colors.BORDER};
    border-right: 1px solid ${colors.BORDER};
  }
`;

function Menu() {
  return (
    <MenuStyled>
      <Alignment $directionX="center">
        <ul>
          <li>
            <NavLinkStyle to={"/home"}>HOME</NavLinkStyle>
          </li>
        </ul>
      </Alignment>
    </MenuStyled>
  );
}

export default Menu;
