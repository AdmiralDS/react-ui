import * as React from 'react';
import { HTMLAttributes } from 'react';
import styled, { css } from 'styled-components';
import { typography } from '#src/components/Typography';
import { Flag } from '#src/components/input/PhoneNumberInput/Flag';
import { Dimension } from '#src/components/input/PhoneNumberInput/utils';

export interface CountryBlockProps extends HTMLAttributes<HTMLLIElement> {
  active?: boolean;
  selected?: boolean;
  disabled?: boolean;
  dimension?: Dimension;
  SvgFlag: React.ElementType | null;
  code: string;
  value: string;
}

const activeCountry = css`
  background-color: ${(p) => p.theme.color['Opacity/Focus']};
`;

const CountryBlockStyle = styled.li<{ disabled?: boolean; selected?: boolean; active?: boolean; dimension?: string }>`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  user-select: none;
  color: ${(p) => (p.disabled ? p.theme.color['Neutral/Neutral 30'] : p.theme.color['Neutral/Neutral 90'])};
  cursor: ${(p) => (p.disabled ? 'not-allowed' : 'pointer')};
  padding: ${(p) => (p.dimension === 'xl' ? '12px 16px' : p.dimension === 'm' ? '8px 16px' : '6px 12px')};
  ${(p) => (p.dimension === 's' ? typography['Body/Body 2 Long'] : typography['Body/Body 1 Long'])}

  ${(p) => ((p.selected && !p.active && !p.disabled) || (p.active && !p.disabled) ? activeCountry : '')}
`;

const StyledCountryName = styled.span`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  padding: 0 9px;
`;

const CountryCode = styled.span`
  flex: 0 0 auto;
  color: ${(p) => p.theme.color['Neutral/Neutral 50']};
`;

export const CountryBlock = React.forwardRef<HTMLLIElement, CountryBlockProps>((props, ref) => {
  const { dimension, value, code, SvgFlag, ...otherProps }: CountryBlockProps = props;

  return (
    <CountryBlockStyle ref={ref} {...otherProps} dimension={dimension}>
      {SvgFlag && <Flag dimension={dimension} Component={SvgFlag} />}
      <StyledCountryName>{value}</StyledCountryName>
      <CountryCode>{code}</CountryCode>
    </CountryBlockStyle>
  );
});
