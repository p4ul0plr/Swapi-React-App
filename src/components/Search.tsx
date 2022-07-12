import styled from "styled-components";
import { colors } from "../styles/themes/colors";
import { sizes } from "../styles/themes/sizes";

interface SearchProps {
  $placeholder?: string;
  $type?: string;
}

const Search = styled.input.attrs((props: SearchProps) => ({
  placeholder: props.$placeholder,
  type: "search",
}))<SearchProps>`
  background-color: ${colors.SEARCH_BACKGROUND};
  border-radius: 3px;
  width: 100%;
  max-width: 220px;
  height: min-content;
  font-size: ${sizes.XS};
  color: ${colors.TITLE_2};
  padding: 5px 10px;
  line-height: 30px;
  border: 1px solid ${colors.BORDER};
  box-shadow: none;

  &:focus-visible {
    border-color: ${colors.WHITE};
    color: ${colors.WHITE};
  }
`;

export default Search;
