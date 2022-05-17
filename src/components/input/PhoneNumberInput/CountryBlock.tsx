import * as React from 'react';
import { ElementType } from 'react';
import styled from 'styled-components';
import { Flag } from '#src/components/input/PhoneNumberInput/Flag';
import { FlagsPack } from '@admiral-ds/flags';
import type { CountryName } from '@admiral-ds/flags';
import type { MenuItemProps } from '#src/components/MenuItem';
import { MenuItem } from '#src/components/MenuItem';

export interface CountryBlockProps extends MenuItemProps {
  name: CountryName;
  value: string;
  code: string;
}

const StyledCountryBlock = styled(MenuItem)<{ disabled?: boolean }>`
  display: flex;
  justify-content: flex-start;
  flex-flow: nowrap;
  cursor: ${(p) => (p.disabled ? 'not-allowed' : 'pointer')};
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

export const CountryBlock = React.forwardRef<HTMLDivElement, CountryBlockProps>((props, ref) => {
  const { dimension, value, code, name, ...otherProps }: CountryBlockProps = props;

  const SvgFlag = (FlagsPack as { [key: CountryName]: ElementType })[name];

  return (
    <StyledCountryBlock dimension={dimension} ref={ref} {...otherProps}>
      {SvgFlag && <Flag dimension={dimension} Component={SvgFlag} />}
      <StyledCountryName>{value}</StyledCountryName>
      <CountryCode>{code}</CountryCode>
    </StyledCountryBlock>
  );
});
