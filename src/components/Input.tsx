import styled from "styled-components";
import { colors } from "../styles/themes/colors";
import { sizes } from "../styles/themes/sizes";

interface InputProps {
  $placeholder?: string;
  $type?: string;
}

const Input = styled.input.attrs((props: InputProps) => ({
  placeholder: props.$placeholder,
  type: props.$type,
}))<InputProps>`
  background-color: ${colors.INPUT_BACKGROUND};
  border-radius: 3px;
  /* width: 100%; */
  font-size: ${sizes.XS};
  color: ${colors.TITLE_2};
  padding: 5px 10px;
  line-height: 30px;
  border: 1px solid ${colors.BORDER};
  box-shadow: none;

  &:focus-visible {
    background-color: ${colors.TERCIARY};
    border-color: ${colors.WHITE};
    color: ${colors.WHITE};
  }
`;

export default Input;
