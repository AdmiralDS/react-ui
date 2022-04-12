import * as React from 'react';
import styled, { css } from 'styled-components';
import { changeInputData } from '#/components/common/dom/changeInputData';
import { refSetter } from '#/components/common/utils/refSetter';
import { TextInput, TextInputProps } from '#/components/input/TextInput';
import { Dropdown } from '#/components/Dropdown';
import { ReactComponent as ChevronRightOutline } from '@admiral-ds/icons/build/system/ChevronRightOutline.svg';
import { countriesList } from '#/components/input/PhoneNumberInput/constants';
import { CountryBlockProps } from '#/components/input/PhoneNumberInput/CountryBlock';
import { Flag } from '#/components/input/PhoneNumberInput/Flag';
import { Dimension } from '#/components/input/PhoneNumberInput/utils';
import {
  defaultPhoneNumberInputHandle,
  ICountry,
  handler,
} from '#/components/input/PhoneNumberInput/defaultPhoneNumberInputHandle';
import { CountriesList } from '#/components/input/PhoneNumberInput/CountriesList';
import { useEffect } from 'react';

const Chevron = styled(ChevronRightOutline)`
  transition: all 0.3s;
  flex-shrink: 0;
  margin-left: 5px;

  & path {
    fill: ${(p) => p.theme.color.basic.tertiary};
  }
`;

const disabledStyles = css`
  & svg {
    & *[fill^='#'] {
      stroke: ${(p) => p.theme.color.text.tertiary};
      fill: ${(p) => p.theme.color.text.tertiary};
    }
  }
`;

const PhoneContainer = styled.div<{ dimension: Dimension; disabled?: boolean }>`
  position: relative;

  & ${Chevron} {
    width: ${(p) => (p.dimension === 's' ? '20px' : '24px')};
    height: ${(p) => (p.dimension === 's' ? '20px' : '24px')};
  }

  & input {
    padding-left: ${(p) => (p.dimension === 's' ? '64px' : '76px')};
  }
`;

const CountryContainer = styled.div<{ dimension: Dimension; isOpened?: boolean; disabled?: boolean }>`
  position: absolute;
  top: 50%;
  left: 16px;
  transform: translateY(-50%);
  z-index: ${(p) => p.theme.zIndex.hint};
  display: flex;

  & ${Chevron} {
    & *[fill^='#'] {
      stroke: none;
    }

    transform: ${(p) => (p.isOpened || p.disabled ? 'rotate(90deg)' : 'rotate(0deg)')};
  }

  ${(p) => p.disabled && disabledStyles};
`;

export interface PhoneNumberInputProps extends Omit<TextInputProps, 'value'> {
  value?: string;
  /** Код ISO A3 страны для определния префикса номера по умолчанию */
  defaultCountry?: string;
  /** Список стран для выпадающего списка. Отмечается кодом ISO A3 страны */
  onlyCountries?: string[];
}

export const PhoneNumberInput = React.forwardRef<HTMLInputElement, PhoneNumberInputProps>(
  ({ value = '', disabled = false, dimension = 'xl', defaultCountry = 'RUS', onlyCountries = [], ...props }, ref) => {
    const handleInput = props.handleInput || defaultPhoneNumberInputHandle;
    const [selectedCountry, setSelectedCountry] = React.useState<any | null>(null);
    const [activeIndex, setActiveIndex] = React.useState<number>(-1);
    const [selectedIndex, setSelectedIndex] = React.useState<number>(-1);
    const inputContainerRef = React.useRef<HTMLDivElement>(null);
    const inputRef = React.useRef<HTMLInputElement>(null);
    const containerRef = React.useRef<HTMLDivElement>(null);
    const [isOpened, setIsOpened] = React.useState<boolean>(false);

    const getFilteredCountryList = (
      countryCodes: CountryBlockProps['iso3'][],
      sourceCountryList: CountryBlockProps[],
    ) => {
      if (countryCodes.length === 0) return sourceCountryList.sort((a, b) => a.value.localeCompare(b.value, 'ru'));
      return sourceCountryList
        .filter((country) => countryCodes.includes(country.iso3))
        .sort((a, b) => a.value.localeCompare(b.value, 'ru'));
    };

    const filteredList: Array<CountryBlockProps> = React.useMemo(() => {
      return getFilteredCountryList(onlyCountries, countriesList);
    }, [onlyCountries, countriesList]);

    useEffect(() => {
      handler.setCountriesList(filteredList as Array<ICountry>);
    }, [filteredList]);

    React.useEffect(() => {
      if (defaultCountry && selectedCountry === null) {
        const index = filteredList.findIndex((country) => country.iso3 === defaultCountry);
        if (index > -1) {
          selectCountry(index);
        }
      }
    }, [defaultCountry]);

    React.useEffect(() => {
      if (selectedCountry !== handler.currentCountry) {
        setSelectedCountry(handler.currentCountry);
        if (isOpened) {
          setActiveIndex(handler.currentCountryIndex);
        } else {
          setSelectedIndex(handler.currentCountryIndex);
        }
      }
    }, [value]);

    const handleButtonClick = () => {
      setIsOpened((prev) => !prev);
    };

    const selectCountry = (indexNumber: number) => {
      if (!inputRef.current) return;

      const hasOldSelected = !!selectedCountry;

      setSelectedIndex(indexNumber);

      const country = filteredList[indexNumber];
      if (country) {
        setSelectedCountry(country);
        handler.setSelectedCountry(country as ICountry);

        handler.beginDirectlyChange();
        try {
          changeInputData(inputRef.current, {
            value: hasOldSelected
              ? value
                  .replace(/\s+/g, '')
                  .replace(selectedCountry.code.replace(/[^0-9+]/g, ''), country.code.replace(/[^0-9+]/g, ''))
              : country.code.replace(/[^0-9+]/g, '') + value.replace(/\s+/g, ''),
          });
        } finally {
          handler.endDirectlyChange();
          setIsOpened(false);
        }
      }
    };

    const handleKeyUp = (e: React.KeyboardEvent) => {
      switch (e.key) {
        case 'Enter':
          if (isOpened && activeIndex > -1) {
            selectCountry(activeIndex);
          }
          break;
        case 'ArrowUp':
          if (!isOpened) {
            setIsOpened(true);
            break;
          }

          if (activeIndex <= 0) {
            setActiveIndex(filteredList.length - 1);
          } else {
            setActiveIndex(activeIndex - 1);
          }
          break;
        case 'ArrowDown':
          if (!isOpened) {
            setIsOpened(true);
            break;
          }
          if (activeIndex >= filteredList.length - 1) {
            setActiveIndex(0);
          } else {
            setActiveIndex(activeIndex + 1);
          }
          break;
        case 'Escape': {
          if (isOpened) {
            setIsOpened(false);
          }
          break;
        }
      }
    };

    const handleKeyDown = (e: React.KeyboardEvent) => {
      if (isOpened && ['Enter', 'ArrowUp', 'ArrowDown'].includes(e.key)) {
        e.preventDefault();
      }
    };

    const clickOutside = (e: Event) => {
      if (e.target && containerRef.current?.contains(e.target as Node)) {
        return;
      }
      setIsOpened(false);
    };

    const IconComponent = () => {
      if (selectedCountry && selectedCountry.Component) {
        return <Flag dimension={dimension} Component={selectedCountry.Component} />;
      }
      return null;
    };

    useEffect(() => {
      setActiveIndex(isOpened ? selectedIndex : -1);
    }, [isOpened]);

    return (
      <PhoneContainer ref={containerRef} dimension={dimension} disabled={disabled}>
        <CountryContainer dimension={dimension} isOpened={isOpened} disabled={disabled}>
          {IconComponent()}
          <Chevron onClick={handleButtonClick} />
        </CountryContainer>
        <TextInput
          {...props}
          type="tel"
          ref={refSetter(ref, inputRef)}
          handleInput={handleInput}
          containerRef={inputContainerRef}
          value={value}
          disabled={disabled}
          dimension={dimension}
          onKeyUp={(...p) => {
            props.onKeyUp?.(...p);
            handleKeyUp(...p);
          }}
          onKeyDown={(...p) => {
            props.onKeyDown?.(...p);
            handleKeyDown(...p);
          }}
        >
          {isOpened && !disabled && (
            <Dropdown targetRef={inputRef} onClickOutside={clickOutside}>
              <CountriesList
                countries={filteredList}
                selectedIndex={selectedIndex}
                activeIndex={activeIndex}
                dimension={dimension}
                onItemClick={selectCountry}
              />
            </Dropdown>
          )}
        </TextInput>
      </PhoneContainer>
    );
  },
);
