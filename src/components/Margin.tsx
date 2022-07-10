import styled from "styled-components";

interface MarginProps {
  $all?: string;
  $x?: string;
  $y?: string;
  $top?: string;
  $bottom?: string;
  $left?: string;
  $right?: string;
}

const Margin = styled.div<MarginProps>`
  ${({ $all }) => {
    if ($all) return "margin: " + $all + ";";
  }}
  ${({ $x, $y }) => {
    if ($x && $y) return "margin: " + $y + " " + $x + ";";
    if ($y) return "margin: " + $y + " 0;";
    if ($x) return "margin: " + "0 " + $x + ";";
  }}
  ${({ $top }) => {
    if ($top) return "margin-top: " + $top + ";";
  }}
  ${({ $bottom }) => {
    if ($bottom) return "margin-bottom: " + $bottom + ";";
  }}
  display: flex;
`;

export default Margin;
