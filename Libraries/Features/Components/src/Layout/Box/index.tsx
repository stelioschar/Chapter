import { IMainTheme } from '@chapter/Features/Themes';
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

const Box = styled.div<IMainTheme>`
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
  font-family: ${({theme}) => theme.fonts.body};
`;

export default Box;
