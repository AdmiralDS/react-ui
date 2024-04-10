import styled, { css } from 'styled-components';
import {
  styleColorMixin,
  styleDisabledMixin,
  styleEventMixin,
  styleMixin,
  styleTextMixin,
} from '#src/components/Link/mixins';

export type AppearanceLink = 'primary' | 'secondary';
export type Dimension = 'm' | 's';

export type LinkComponentProps = {
  disabled?: boolean;
  $appearance?: AppearanceLink;
  $dimension?: Dimension;
};

export const LinkComponentCssMixin = css<LinkComponentProps>`
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
  display: flex;
  align-items: center;
  width: fit-content;
  text-decoration: none;
  position: relative;
  ${styleMixin};
  ${styleColorMixin};
  ${styleTextMixin};
  ${(props) => (props.disabled ? styleDisabledMixin : styleEventMixin)}
`;

export const LinkComponent = styled.a<LinkComponentProps>`
  ${LinkComponentCssMixin}
`;
