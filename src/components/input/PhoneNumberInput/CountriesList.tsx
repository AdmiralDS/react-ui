import styled from 'styled-components';
import { typography } from '#src/components/Typography';
import { CountryBlock, CountryBlockProps } from '#src/components/input/PhoneNumberInput/CountryBlock';
import React from 'react';
import { CountryIso3Code } from '#src/components/input/PhoneNumberInput/constants';
import { CustomInputHandler } from '#src/components/common/dom/changeInputData';
import { Menu, MenuDimensions, MenuProps } from '#src/components/Menu';

export type CountryInfo = {
  uid: string;
  code: string;
  iso3: CountryIso3Code;
  rusName: string;
  name: string;
  handleInput: CustomInputHandler;
};

export interface CountriesListProps extends Omit<MenuProps, 'children'> {
  countries: Array<CountryInfo>;
}

const StyledCountriesList = styled(Menu)<{ dimension: MenuDimensions }>`
  ${(p) => (p.dimension === 's' ? typography['Body/Body 2 Long'] : typography['Body/Body 1 Long'])}
`;

export const CountriesList = ({ countries, dimension = 'l', ...props }: CountriesListProps) => {
  return (
    <StyledCountriesList dimension={dimension} maxLines={4} {...props}>
      {countries.map((country) => {
        const countryBlockProps: CountryBlockProps = {
          dimension: dimension,
          value: country.rusName,
          name: country.name,
          code: country.code,
        };
        return <CountryBlock id={country.uid} key={country.uid} {...countryBlockProps} />;
      })}
    </StyledCountriesList>
  );
};
