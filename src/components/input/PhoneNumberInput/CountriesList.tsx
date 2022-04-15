import styled from 'styled-components';
import { Dimension } from '#src/components/input/PhoneNumberInput/utils';
import { typography } from '#src/components/Typography';
import { CountryBlock, CountryBlockProps } from '#src/components/input/PhoneNumberInput/CountryBlock';
import React, { HTMLAttributes, useEffect, useRef } from 'react';
import { CountryIso3Code } from '#src/components/input/PhoneNumberInput/constants';
import { CustomInputHandler } from '#src/components/common/dom/changeInputData';

export type CountryInfo = {
  uid: string;
  code: string;
  iso3: CountryIso3Code;
  rusName: string;
  SvgFlag: React.ElementType | null;
  handleInput: CustomInputHandler;
};

export interface CountriesListProps extends HTMLAttributes<HTMLLIElement> {
  countries: Array<CountryInfo>;
  dimension: Dimension;
  activeIndex: number;
  onItemClick: (index: number) => void;
  onActivateItem: (index: number) => void;
}

const StyledCountriesList = styled.ul<{ dimension: Dimension }>`
  pointer-events: initial;
  padding: 8px 0;
  margin: 0;
  overflow-x: hidden;
  overflow-y: auto;
  background-color: ${(p) => p.theme.color.background.primary};
  border-radius: 4px;
  ${(p) => p.theme.shadow.NonClickable}
  flex: 0 0 auto;
  max-height: ${(p) => (p.dimension === 'xl' ? '192px' : p.dimension === 'm' ? '160px' : '128px')};
  ${(p) => (p.dimension === 's' ? typography['Body/Body 2 Long'] : typography['Body/Body 1 Long'])}
`;

export const CountriesList = ({
  countries,
  dimension,
  activeIndex,
  onItemClick,
  onActivateItem,
}: CountriesListProps) => {
  let currentItem: HTMLLIElement | null = null;
  const currentActive = useRef<number>(-1);

  useEffect(() => {
    const disableSmooth = Math.abs(activeIndex - currentActive.current) > 5;
    currentActive.current = activeIndex;

    currentItem?.scrollIntoView({
      behavior: disableSmooth ? 'auto' : 'smooth',
      inline: 'center',
      block: 'nearest',
    });
  }, [activeIndex]);

  return (
    <StyledCountriesList dimension={dimension}>
      {countries.map((country, index) => {
        const countryBlockProps: CountryBlockProps = {
          dimension,
          active: index === activeIndex,
          value: country.rusName,
          code: country.code,
          SvgFlag: country.SvgFlag,
          onClick: () => onItemClick(index),
          onMouseEnter: () => onActivateItem(index),
        };

        return (
          <CountryBlock
            key={country.uid}
            ref={(ref) => {
              if (index === activeIndex) currentItem = ref;
            }}
            {...countryBlockProps}
          />
        );
      })}
    </StyledCountriesList>
  );
};
