import { NavLinkStyle } from "./NavLinkStyle";
import { Alignment } from "./Alignment";
import { colors } from "../styles/themes/colors";
import { sizes } from "../styles/themes/sizes";
import styled from "styled-components";

const HorizontalList = styled.li`
  list-style-type: none;
  float: left;

  span {
    color: ${colors.BORDER};
    font-size: ${sizes.XS};
    letter-spacing: 1px;
    letter-spacing: 1px;
    line-height: 16px;
    font-weight: bold;
    padding: 0 5px;
  }
`;

function SubMenu() {
  return (
    <Alignment $directionX="end">
      <ul>
        <HorizontalList>
          <NavLinkStyle to={"/login"}>LOGOUT</NavLinkStyle>
        </HorizontalList>
        <HorizontalList>
          <span>/ /</span>
        </HorizontalList>
        <HorizontalList>
          <NavLinkStyle to={"/"}>ABOUT</NavLinkStyle>
        </HorizontalList>
      </ul>
    </Alignment>
  );
}

export default SubMenu;
