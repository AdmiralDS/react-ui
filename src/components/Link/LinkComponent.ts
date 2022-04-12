import styled from 'styled-components';
import { AnchorHTMLAttributes } from 'react';
import { LIGHT_THEME as DEFAULT_THEME } from './../themes';
import { styleColorMixin, styleDisabledMixin, styleMixin, styleTextMixin } from './mixins';

export type AppearanceLink = 'primary' | 'secondary';
export type Dimension = 'm' | 's';

type LinkComponent = AnchorHTMLAttributes<HTMLAnchorElement> & {
  disabled: boolean;
  appearance: AppearanceLink;
  dimension: Dimension;
};

export const LinkComponent = styled.a<LinkComponent>`
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

LinkComponent.defaultProps = {
  theme: DEFAULT_THEME,
};
