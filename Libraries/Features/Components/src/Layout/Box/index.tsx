import styled from "@emotion/styled";
import {
  background,
  border,
  color,
  flexbox,
  grid,
  layout,
  position,
  shadow,
  space,
  typography,
} from "styled-system";

const Box = styled.div`
  ${background}
  ${border}
  ${color}
  ${flexbox}
  ${grid}
  ${layout}
  ${position}
  ${shadow}
  ${space}
  ${typography}
  font-family: ${(props) => props.theme.fonts.body};
`;

export default Box;
