import styled from "styled-components";

export const Grid = styled.ul`
  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr;
    display: grid;
    grid-gap: 20px;
  }
  @media (max-width: 992px) {
    grid-template-columns: 1fr;
    display: grid;
    grid-gap: 20px;
  }
`;
