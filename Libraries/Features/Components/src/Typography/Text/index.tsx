import React, { FunctionComponent } from "react";
import { space, typography, color, layout } from "styled-system";
import { IMainTheme } from "@chapter/Features/Themes";

import styled from "@emotion/styled";

const EmotionText = styled.p<IMainTheme>`
  ${color};
  ${space};
  ${layout};
  ${typography};
  font-size: 1rem;
  line-height: 2rem;
  letter-spacing: 0.02rem;
  color: ${({ theme }) => theme.colors.text};
  font-family: ${({ theme }) => theme.fonts.heading};
  font-weight: ${({ theme }) => theme.fontWeights.normal};
`;

export const Text: FunctionComponent = ({ children }) => {
  return <EmotionText>{children}</EmotionText>;
};

export default Text;
