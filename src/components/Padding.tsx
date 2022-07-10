import styled from "styled-components";

interface PaddingProps {
  $all?: string;
  $x?: string;
  $y?: string;
  $top?: string;
  $bottom?: string;
  $left?: string;
  $right?: string;
}

const Padding = styled.div<PaddingProps>`
  ${({ $all }) => {
    if ($all) return "padding: " + $all + ";";
  }}
  ${({ $x, $y }) => {
    if ($x && $y) return "padding: " + $y + " " + $x + ";";
    if ($y) return "padding: " + $y + " 0;";
    if ($x) return "padding: " + "0 " + $x + ";";
  }}
  ${({ $top }) => {
    if ($top) return "padding-top: " + $top + ";";
  }}
  ${({ $bottom }) => {
    if ($bottom) return "padding-bottom: " + $bottom + ";";
  }}
  display: flex;
`;

export default Padding;
