import styled from "styled-components";
import galaxyBackground from "../assets/images/backcgrounds/galaxybackground.png";
import Center from "../styles/base/grid";

const GalaxyBackground = styled(Center)`
  background-image: url(${galaxyBackground});
  background-size: contain;
  background-position: center;
  background-repeat: repeat;
  width: 100vw;
  height: 100vh;
`;

export default GalaxyBackground;
