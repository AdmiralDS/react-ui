import * as React from 'react';
import { HTMLAttributes } from 'react';
import styled, { css } from 'styled-components';
import { typography } from '#/components/Typography';
import { Flag } from '#/components/input/PhoneNumberInput/Flag';
import { Dimension } from '#/components/input/PhoneNumberInput/utils';

export interface CountryBlockProps extends HTMLAttributes<HTMLLIElement> {
  selected?: boolean;
  code: string;
  value: string;
  dimension?: Dimension;
  Component: React.ElementType;
  name: string;
  disabled?: boolean;
  active?: boolean;
  iso3?: string;
}

const activeCountry = css`
  background-color: ${(p) => p.theme.color.background.secondary};
`;

const CountryBlockStyle = styled.li<{ disabled?: boolean; selected?: boolean; active?: boolean; dimension?: string }>`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  user-select: none;
  color: ${(p) => (p.disabled ? p.theme.color.text.tertiary : p.theme.color.text.primary)};
  cursor: ${(p) => (p.disabled ? 'not-allowed' : 'pointer')};
  padding: ${(p) => (p.dimension === 'xl' ? '12px 16px' : p.dimension === 'm' ? '8px 16px' : '6px 12px')};
  ${(p) => (p.dimension === 's' ? typography['Additional/S'] : typography['Additional/L'])}

  &:hover {
    background: ${(p) => (p.disabled ? '' : p.theme.color.background.secondary)};
  }

  ${(p) => ((p.selected && !p.active && !p.disabled) || (p.active && !p.disabled) ? activeCountry : '')}
`;

const CountryName = styled.span`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  padding: 0 9px;
`;

const CountryCode = styled.span`
  flex: 0 0 auto;
  color: ${(p) => p.theme.color.text.secondary};
`;

export const CountryBlock = React.forwardRef<HTMLLIElement, CountryBlockProps>((props, ref) => {
  const { dimension, value, code, Component, ...otherProps }: CountryBlockProps = props;

  return (
    <CountryBlockStyle ref={ref} {...otherProps} dimension={dimension}>
      <Flag dimension={dimension} Component={Component} />
      <CountryName>{value}</CountryName>
      <CountryCode>{code}</CountryCode>
    </CountryBlockStyle>
  );
});
