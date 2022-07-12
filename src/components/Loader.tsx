import styled, { keyframes } from "styled-components";
import loader from "../assets/icons/loader/yellow-death-star.svg";

const loaderSpinStyle = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const LoaderStyle = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 70vh;
`;

const LoaderLogo = styled.img`
  animation: ${loaderSpinStyle} infinite 2.5s linear;
  height: 4rem;
`;

function Loader() {
  return (
    <LoaderStyle data-testid="loader">
      <LoaderLogo className="loader-logo" src={loader} />
    </LoaderStyle>
  );
}

export default Loader;
