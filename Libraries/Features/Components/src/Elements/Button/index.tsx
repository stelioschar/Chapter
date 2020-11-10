import { IMainTheme } from "@chapter/Features/Themes";
import styled from "@emotion/styled";
import { variant, space, color, typography, layout, SpaceProps } from "styled-system";

type Variant = "primary" | "secondary" | "pill" | "blank";
type Size = "small" | "";

interface ButtonProps extends SpaceProps, IMainTheme {
  variant?: Variant;
  size?: Size;
}

const disabledButtonProps = (props: any) => ({
  "&:disabled": {
    color: props.theme.colors.text,
    backgroundColor: props.theme.colors.grey,
    cursor: "not-allowed",
  },
});

const Button = styled.button<ButtonProps>`
  ${space};
  ${color};
  ${typography};
  ${layout};
  border: none;
  font-size: 1rem;
  display: inline-block;
  padding: 0.5rem 0.75rem;
  color: ${({ theme }) => theme.colors.heading};
  font-family: ${({ theme }) => theme.fonts.body};
  cursor: pointer;
  font-weight: ${({ theme }) => theme.fontWeights.semiBold};
  background-color: transparent;
  &:focus {
    outline: none;
  }
  ${({ theme }) =>
    variant({
      variants: {
        primary: {
          color: theme.colors.white,
          backgroundColor: theme.colors.primary,
          padding: "1rem 2rem",
          borderRadius: "0.5rem",
          boxShadow: "0px 0.25rem 0.375rem rgba(31, 55, 108, 0.12)",
          ...disabledButtonProps({ theme }),
        },
        secondary: {
          color: theme.colors.primary,
          backgroundColor: theme.colors.lightBlue,
          padding: "1rem 2rem",
          borderRadius: "0.5rem",
          ...disabledButtonProps({ theme }),
        },
        pill: {
          color: theme.colors.green,
          backgroundColor: theme.colors.lightGreen,
          padding: "1rem 2rem",
          borderRadius: "2rem",
          ...disabledButtonProps({ theme }),
        },
        blank: {
          backgroundColor: theme.colors.white,
          border: `1px ${theme.colors.grey} solid`,
          padding: "0.75rem 1.5rem",
          borderRadius: "0.5rem",
          boxShadow: "0px 0.125rem 0.25rem rgba(0, 0, 0, 0.04)",
          ...disabledButtonProps({ theme }),
        },
      },
    })}
  ${variant({
    prop: "size",
    variants: {
      small: {
        padding: "0.75rem 1.5rem",
        fontSize: "0.875rem",
      },
    },
  })}
`;

export default Button;
