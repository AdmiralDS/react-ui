import * as React from 'react';
import styled, { css } from 'styled-components';
import { changeInputData } from '#src/components/common/dom/changeInputData';
import { refSetter } from '#src/components/common/utils/refSetter';
import { TextInput, TextInputProps } from '#src/components-ver2/input/TextInput';
import { Dropdown } from '#src/components-ver2/Dropdown';
import { ReactComponent as ChevronRightOutline } from '@admiral-ds/icons/build/system/ChevronRightOutline.svg';
import {
  COUNTRY_ISO3_CODES,
  CountryCodes,
  CountryIso3Code,
  CountryNames,
  CountryRusNames,
} from '#src/components-ver2/input/PhoneNumberInput/constants';
import { Flag } from '#src/components-ver2/input/PhoneNumberInput/Flag';
import { Dimension } from '#src/components-ver2/input/PhoneNumberInput/utils';
import {
  defaultPhoneNumberInputHandler,
  clojureHandler,
} from '#src/components-ver2/input/PhoneNumberInput/defaultPhoneNumberInputHandle';
import { CountriesList, CountryInfo } from '#src/components-ver2/input/PhoneNumberInput/CountriesList';
import { uid } from '#src/components/common/uid';
import { getIcon } from '#src/components-ver2/input/PhoneNumberInput/iconsPack';
import getFindCountryFunction, {
  findCountryFunction,
  CountryPhoneCode,
} from '#src/components-ver2/input/PhoneNumberInput/findCoutryWithPriority';

const Chevron = styled(ChevronRightOutline)<{ disabled?: boolean }>`
  transition: all 0.3s;
  flex-shrink: 0;
  margin-left: 5px;

  & path {
    fill: ${(p) => (p.disabled ? p.theme.color['Neutral/Neutral 30'] : p.theme.color['Neutral/Neutral 50'])};
  }
`;

const disabledStyles = css`
  & svg {
    opacity: 0.4;
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
  defaultCountry?: CountryIso3Code;
  /** Список стран для выпадающего списка. Отмечается кодом ISO A3 страны */
  onlyCountries?: Array<CountryIso3Code>;
}

export const PhoneNumberInput = React.forwardRef<HTMLInputElement, PhoneNumberInputProps>(
  (
    {
      value = '',
      disabled = false,
      dimension = 'xl',
      defaultCountry = 'RUS',
      onlyCountries = COUNTRY_ISO3_CODES,
      handleInput,
      ...props
    },
    ref,
  ) => {
    const [activeIndex, setActiveIndex] = React.useState<number>(-1);
    const [selectedIndex, setSelectedIndex] = React.useState<number>(-1);
    const inputContainerRef = React.useRef<HTMLDivElement>(null);
    const inputRef = React.useRef<HTMLInputElement>(null);
    const containerRef = React.useRef<HTMLDivElement>(null);
    const [isOpened, setIsOpened] = React.useState<boolean>(false);

    const countryList = React.useMemo<CountryInfo[]>(() => {
      return onlyCountries
        .reduce((acc: CountryPhoneCode[], iso3) => {
          const codes = CountryCodes[iso3];
          if (codes) {
            codes.forEach((code) => acc.push({ iso3, code }));
          }
          return acc;
        }, [])
        .map((item) => {
          const { iso3, code } = item,
            name = CountryNames[iso3];
          return {
            ...item,
            rusName: CountryRusNames[iso3],
            SvgFlag: getIcon(name),
            uid: uid(),
            handleInput: handleInput ? handleInput : clojureHandler(code),
          };
        })
        .sort((a, b) => a.rusName.localeCompare(b.rusName, 'ru'));
    }, [onlyCountries]);

    const findCountry = React.useMemo<findCountryFunction>(() => getFindCountryFunction(countryList), [countryList]);

    const currentCountry = React.useMemo<CountryPhoneCode | null>(() => findCountry(value), [value]);
    const currentCountryIndex = currentCountry
      ? countryList.findIndex((item) => item.iso3 === currentCountry.iso3 && item.code === currentCountry.code)
      : -1;
    const selectedCountryCode = selectedIndex > -1 ? countryList[selectedIndex].code : null;
    const sameCountryCode = currentCountry?.code === selectedCountryCode;

    if (currentCountryIndex !== selectedIndex && !sameCountryCode) setSelectedIndex(currentCountryIndex);

    const handleInputRef =
      currentCountryIndex > -1 ? countryList[currentCountryIndex].handleInput : defaultPhoneNumberInputHandler;

    React.useEffect(() => {
      if (defaultCountry && selectedIndex === -1) {
        const index = countryList.findIndex((country) => country.iso3 === defaultCountry);
        if (index > -1) {
          selectCountry(index);
        }
      }
    }, [defaultCountry]);

    const handleButtonClick = () => {
      setIsOpened((prev) => !prev);
    };

    const selectCountry = (indexNumber: number) => {
      if (!inputRef.current || indexNumber === selectedIndex) return;

      const hasOldSelected = selectedIndex > -1;

      const oldCode = hasOldSelected ? countryList[selectedIndex].code.replace(/[^0-9+]/g, '') : '';
      const newCode = countryList[indexNumber].code.replace(/[^0-9+]/g, '');

      changeInputData(inputRef.current, {
        value: hasOldSelected
          ? value.replace(/\s+/g, '').replace(oldCode, newCode)
          : newCode + value.replace(/\s+/g, ''),
        selectionStart: 1,
        selectionEnd: newCode.length,
      });

      setSelectedIndex(indexNumber);
      setIsOpened(false);
    };

    const handleKeyUp = (e: React.KeyboardEvent) => {
      switch (e.key) {
        case 'Enter':
          if (isOpened && activeIndex > -1) {
            selectCountry(activeIndex);
            e.preventDefault();
          }
          break;
        case 'ArrowUp':
          if (!isOpened) {
            setIsOpened(true);
            break;
          }

          if (activeIndex <= 0) {
            setActiveIndex(countryList.length - 1);
          } else {
            setActiveIndex(activeIndex - 1);
          }
          break;
        case 'ArrowDown':
          if (!isOpened) {
            setIsOpened(true);
            break;
          }
          if (activeIndex >= countryList.length - 1) {
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

    const IconComponent = React.useMemo<JSX.Element | null>(() => {
      if (selectedIndex > -1) {
        const SvgComponent = countryList[selectedIndex].SvgFlag;
        return SvgComponent ? <Flag dimension={dimension} Component={SvgComponent} /> : null;
      }
      return null;
    }, [selectedIndex]);

    React.useEffect(() => {
      setActiveIndex(isOpened ? selectedIndex : -1);
    }, [isOpened]);

    React.useEffect(() => {
      if (isOpened) {
        setActiveIndex(selectedIndex);
      }
    }, [selectedIndex]);

    return (
      <PhoneContainer ref={containerRef} dimension={dimension} disabled={disabled}>
        <TextInput
          {...props}
          type="tel"
          ref={refSetter(ref, inputRef)}
          handleInput={handleInputRef}
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
                countries={countryList}
                activeIndex={activeIndex}
                dimension={dimension}
                onItemClick={selectCountry}
                onActivateItem={(index: number) => setActiveIndex(index)}
              />
            </Dropdown>
          )}
        </TextInput>
        <CountryContainer dimension={dimension} isOpened={isOpened} disabled={disabled}>
          {IconComponent}
          <Chevron onClick={handleButtonClick} disabled={disabled} />
        </CountryContainer>
      </PhoneContainer>
    );
  },
);

PhoneNumberInput.displayName = 'PhoneNumberInput';
