import styled from "styled-components";
import { colors } from "../styles/themes/colors";
import { sizes } from "../styles/themes/sizes";

interface SubmitProps {
  $value: string;
}

const Submit = styled.input.attrs((props: SubmitProps) => ({
  type: "submit",
  value: props.$value,
}))<SubmitProps>`
  font-weight: 700;
  font-size: ${sizes.XS};
  line-height: ${sizes.XL};
  letter-spacing: 7px;
  color: ${colors.WHITE};
  border: none;
  background-color: ${colors.TERCIARY};
  width: 100%;
  padding: 10px;
  cursor: pointer;
`;

export default Submit;
