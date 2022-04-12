import styled from 'styled-components';
import { Dimension } from '#/components/input/PhoneNumberInput/utils';
import { typography } from '#/components/Typography';
import { CountryBlock, CountryBlockProps } from '#/components/input/PhoneNumberInput/CountryBlock';
import React, { HTMLAttributes, useEffect, useRef } from 'react';

export interface CountriesListProps extends HTMLAttributes<HTMLLIElement> {
  countries: CountryBlockProps[];
  dimension: Dimension;
  selectedIndex: number;
  activeIndex: number;
  onItemClick: (index: number) => void;
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
  ${(p) => (p.dimension === 's' ? typography['Additional/S'] : typography['Additional/L'])}
`;

export const CountriesList = ({
  countries,
  dimension,
  selectedIndex,
  activeIndex,
  onItemClick,
}: CountriesListProps) => {
  let currentItem: HTMLLIElement | null = null;
  const currentActive = useRef<number>(activeIndex);

  useEffect(() => {
    const selected = document.querySelector('[aria-selected="true"]');
    selected?.scrollIntoView({
      inline: 'center',
      block: 'nearest',
    });
  }, []);

  useEffect(() => {
    const disableSmooth = Math.abs(activeIndex - currentActive.current) > 1;
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
          active: index === activeIndex || index === selectedIndex,
          value: country.value,
          code: country.code,
          Component: country.Component,
          name: country.name,
          onClick: () => onItemClick(index),
        };

        if (index === selectedIndex) {
          countryBlockProps['aria-selected'] = true;
        }

        return (
          <CountryBlock
            key={`${country.name}${country.code.replace(/\D/g, '')}`}
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
