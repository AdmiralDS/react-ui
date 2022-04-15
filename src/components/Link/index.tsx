import { TYPOGRAPHY } from '#src/components/Typography';
import * as React from 'react';
import styled, { css } from 'styled-components';

export interface LinkOwnProps {
  /** Вид ссылки */
  appearance?: AppearanceLink;
  /** Отключение ссылки */
  disabled?: boolean;
  /** Размер ссылки */
  dimension?: DimensionLink;
}

export type AppearanceLink = 'primary' | 'secondary';
export type DimensionLink = 'm' | 's';

export const styleDisabledMixin = css<{ disabled?: boolean }>`
  color: ${({ theme }) => theme.color.text.tertiary};
  & *[fill^='#'] {
    fill: ${({ theme }) => theme.color.text.tertiary};
  }
  user-select: none;
`;

export const styleColorMixin = css<{ appearance?: AppearanceLink }>`
  color: ${({ theme, appearance }) =>
    appearance === 'secondary' ? theme.color.text.primary : theme.color.basic.primary};
  & *[fill^='#'] {
    fill: ${({ theme, appearance }) =>
      appearance === 'secondary' ? theme.color.text.secondary : theme.color.basic.primary};
  }
`;

export const styleMixin = css`
  &:hover {
    color: ${({ theme }) => theme.color.basic.hover};
    & *[fill^='#'] {
      fill: ${({ theme }) => theme.color.basic.hover};
    }
  }
  &:focus {
    color: ${({ theme }) => theme.color.basic.hover};
    & *[fill^='#'] {
      fill: ${({ theme }) => theme.color.basic.hover};
    }
    outline-color: ${({ theme }) => theme.color.basic.hover};
  }
  &:active {
    color: ${({ theme }) => theme.color.basic.press};
    & *[fill^='#'] {
      fill: ${({ theme }) => theme.color.basic.press};
    }
  }
`;

export const styleTextMixin = css<{ dimension?: DimensionLink }>`
  font-size: ${({ dimension }) => (dimension === 'm' ? 16 : 14)}px;
  font-weight: normal;
  line-height: ${({ dimension }) => (dimension === 'm' ? 24 : 20)}px;
  font-family: ${TYPOGRAPHY.fontFamily};
`;

export const LinkCssMixin = css<LinkOwnProps>`
  cursor: ${(props) => (props.disabled ? 'default' : 'pointer')};
  display: flex;
  pointer-events: ${(props) => (props.disabled ? 'none' : 'auto')};
  align-items: center;
  width: fit-content;
  text-decoration: none;
  position: relative;
  ${styleMixin};
  ${styleColorMixin};
  ${styleTextMixin};
  ${(props) => (props.disabled ? styleDisabledMixin : '')}
`;

export const LinkComponent = styled.a<LinkOwnProps>`
  ${LinkCssMixin}
`;

export interface LinkProps extends LinkOwnProps, React.AnchorHTMLAttributes<HTMLAnchorElement> {}

export const Link = React.forwardRef<HTMLAnchorElement, LinkProps>(
  ({ disabled = false, appearance = 'primary', dimension = 'm', ...props }, ref) => {
    return (
      <LinkComponent
        dimension={dimension}
        ref={ref}
        tabIndex={disabled ? -1 : props.tabIndex}
        disabled={disabled}
        appearance={appearance}
        {...props}
      />
    );
  },
);

Link.displayName = 'Link';
