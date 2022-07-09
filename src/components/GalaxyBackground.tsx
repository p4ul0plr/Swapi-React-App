import styled from "styled-components";
import galaxyBackground from "../assets/images/galaxybackground.png";

const GalaxyBackground = styled.div`
  background-image: url(${galaxyBackground});
  background-size: contain;
  background-position: center;
  background-repeat: repeat;
  width: 100vw;
  height: 100vh;
`;

export default GalaxyBackground;
