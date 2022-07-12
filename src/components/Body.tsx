import { JSXElementConstructor } from "react";
import styled from "styled-components";
import galaxyBackground from "../assets/images/backcgrounds/galaxybackground.png";

const BodyStyle = styled.div`
  background-image: url(${galaxyBackground});
  background-size: contain;
  background-position: center;
  background-repeat: repeat;
`;

const ContainerBodyStyled = styled.div`
  @media (max-width: 575px) {
    padding: 5px;
  }

  @media (min-width: 576px) {
    padding: 10px;
  }

  @media (min-width: 768px) {
    padding: 10px;
  }

  @media (min-width: 992px) {
    padding: 20px;
  }

  @media (min-width: 1200px) {
    padding: 20px 0;
    max-width: 1170px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    min-height: calc(100vh - 117px - 104.05px);
  }
`;

interface BodyProps {
  children?: JSX.Element | JSX.Element[];
}

function Body({ children }: BodyProps) {
  return (
    <BodyStyle>
      <ContainerBodyStyled>{children}</ContainerBodyStyled>
    </BodyStyle>
  );
}

export default Body;
