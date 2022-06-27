import styled from 'styled-components';
import { typography } from '#src/components/Typography';
import { CountryBlock, CountryBlockProps } from '#src/components/input/PhoneNumberInput/CountryBlock';
import React, { useMemo } from 'react';
import type { CountryAlpha3Code } from '@admiral-ds/flags';
import { CustomInputHandler } from '#src/components/common/dom/changeInputData';
import { Menu, MenuDimensions, MenuProps } from '#src/components/Menu';
import { ItemProps, RenderOptionProps } from '#src/components/MenuItem';

export type CountryInfo = {
  uid: string;
  code: string;
  iso3: CountryAlpha3Code;
  rusName: string;
  name: string;
  handleInput: CustomInputHandler;
};

export interface CountriesListProps extends Omit<MenuProps, 'model'> {
  countries: Array<CountryInfo>;
  dimension: MenuDimensions;
}

const StyledCountriesList = styled(Menu)<{ dimension: MenuDimensions }>`
  ${(p) => (p.dimension === 's' ? typography['Body/Body 2 Long'] : typography['Body/Body 1 Long'])}
  max-height: ${({ dimension }) => {
    switch (dimension) {
      case 'l':
        return `${48 * 4 + 16}px`;
      case 'm':
        return `${40 * 4 + 16}px`;
      case 's':
        return `${32 * 4 + 16}px`;
      default:
        return `${48 * 4 + 16}px`;
    }
  }};
`;

export const CountriesList = ({ countries, dimension = 'l', ...props }: CountriesListProps) => {
  const listModel = useMemo<Array<ItemProps>>(() => {
    return countries.map((country) => {
      const countryBlockProps: CountryBlockProps = {
        dimension: dimension,
        name: country.name,
        value: country.rusName,
        code: country.code,
      };
      return {
        id: country.uid,
        render: (options: RenderOptionProps) => (
          <CountryBlock key={country.uid} dimension={dimension} {...countryBlockProps} {...options} />
        ),
      };
    });
  }, [countries]);

  return <StyledCountriesList dimension={dimension} model={listModel} {...props} />;
};
