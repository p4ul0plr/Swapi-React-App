import { NavLink } from "react-router-dom";
import { colors } from "../styles/themes/colors";
import { sizes } from "../styles/themes/sizes";
import styled from "styled-components";

export const NavLinkStyle = styled(NavLink)`
  color: ${colors.TITLE_2};
  font-size: ${sizes.XS};
  letter-spacing: 1px;
  letter-spacing: 1px;
  line-height: 16px;
  font-weight: bold;
  text-decoration: none;
  transition: 0.3s;

  &:hover {
    text-decoration: underline;
    color: ${colors.TITLE_1};
    transition: 0.3s;
  }
`;
