import { Icon } from "./Icon";
import instagramIcon from "../assets/icons/social/instagram.svg";
import linkedinIcon from "../assets/icons/social/linkedin.svg";
import facebookIcon from "../assets/icons/social/facebook.svg";
import gitHubIcon from "../assets/icons/social/github.svg";
import styled from "styled-components";

const IconsListStyle = styled.div`
  width: fit-content;

  li {
    list-style-type: none;
    float: left;
  }
`;

function IconsList() {
  return (
    <IconsListStyle>
      <ul>
        <li>
          <a target="_blank" href="https://github.com/p4ul0plr/">
            <Icon width="26px" height="26px" src={gitHubIcon} />
          </a>
        </li>
        <li>
          <a target="_blank" href="#">
            <Icon width="26px" height="26px" src={instagramIcon} />
          </a>
        </li>
        <li>
          <a target="_blank" href="https://www.linkedin.com/in/paulo-nobrega/">
            <Icon width="26px" height="26px" src={linkedinIcon} />
          </a>
        </li>
        <li>
          <a target="_blank" href="#">
            <Icon width="26px" height="26px" src={facebookIcon} />
          </a>
        </li>
      </ul>
    </IconsListStyle>
  );
}

export default IconsList;
