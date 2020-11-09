import styled from "@emotion/styled";
import { space, typography, color, layout } from "styled-system";

const HEADING_SIZES: { [key: string]: string } = {
  xl: "2rem",
  l: "1.5rem",
  m: "1.25rem",
};

const Header = styled.h1<any>`
  ${color};
  ${space};
  ${typography};
  ${layout};
  font-size: ${(props) => HEADING_SIZES[props.size || "xl"]};
  font-family: ${({ theme }: any) => theme.fonts.heading};
  font-weight: ${({ theme }: any) => theme.fontWeights.bold};
  color: ${({ theme }: any) => theme.colors.heading};
  letter-spacing: 0.02rem;
`;

export default Header;
