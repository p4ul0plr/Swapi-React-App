import styled from "styled-components";

export const Grid = styled.div`
  @media (max-width: 575px) {
    grid-template-columns: 1fr;
    display: grid;
    grid-gap: 5px;
  }

  @media (min-width: 576px) {
    grid-template-columns: 1fr;
    display: grid;
    grid-gap: 10px;
  }

  @media (min-width: 768px) {
    grid-template-columns: 1fr;
    display: grid;
    grid-gap: 10px;
  }

  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr;
    display: grid;
    grid-gap: 20px;
  }

  @media (min-width: 1200px) {
    grid-template-columns: 1fr 1fr;
    display: grid;
    grid-gap: 20px;
  }
`;
