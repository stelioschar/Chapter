import styled from "@emotion/styled";
import { space, typography, color, layout } from "styled-system";

import { IMainTheme } from "@chapter/Features/Themes";

const Header = styled.h1<IMainTheme>`
  ${color};
  ${space};
  ${typography};
  ${layout};
  font-family: ${({ theme }) => theme.fonts.heading};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  color: ${({ theme }) => theme.colors.heading};
  letter-spacing: 0.02rem;
`;

export default Header;
