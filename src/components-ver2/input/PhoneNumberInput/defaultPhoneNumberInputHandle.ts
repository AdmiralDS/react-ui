import { CustomInputHandler, InputData } from '#src/components/common/dom/changeInputData';
import { CountryIso3Code } from '#src/components/input/PhoneNumberInput/constants';

type ParsedData = {
  mask: CountryIso3Code;
  cityCode: string;
  middleCode: string;
  lastNum: string;
};

export const defaultPhoneNumberInputHandler = clojureHandler(null);

export function clojureHandler(mask: CountryIso3Code | null): CustomInputHandler {
  const countryCode = mask?.replace(/\D/g, '');

  function needFormat(value: string): boolean {
    if (!value || !countryCode) return false;

    const hasPlus = value.charAt(0) === '+';
    const hasCountyWs = value.length > countryCode.length + 1 ? value.charAt(countryCode.length + 1) === ' ' : true;
    const hasCityWs = value.length > countryCode.length + 5 ? value.charAt(countryCode.length + 5) === ' ' : true;
    const hasMiddleWs = value.length > countryCode.length + 9 ? value.charAt(countryCode.length + 9) === ' ' : true;

    return !hasPlus || !hasCountyWs || !hasCityWs || !hasMiddleWs;
  }

  const InitialInputData = {
    selectionStart: 1,
    value: '',
  } as const;

  return (inputData: InputData | null): InputData => {
    let selectionStart = inputData?.selectionStart || 1;

    if (!needFormat(inputData?.value || '')) {
      return inputData || InitialInputData;
    }

    const hasNoPlus = inputData?.value?.charAt(0) !== '+';
    if (hasNoPlus) selectionStart += 1;

    const clearData = (inputData?.value || '').replace(/\D/g, '');
    const value = formatValue(countryCode, clearData);

    const positionWithSpaceBefore = /\d/.test(value.charAt(selectionStart)) && value.charAt(selectionStart - 1) === ' ';

    const oldNextChar = inputData?.value
      ? inputData.value.length >= selectionStart
        ? inputData.value.charAt(selectionStart).trim()
        : null
      : null;

    if (positionWithSpaceBefore && !oldNextChar) {
      selectionStart += 1;
    }

    const noChanges = inputData?.value === value;

    return !noChanges
      ? {
          ...inputData,
          value,
          selectionStart,
          selectionEnd: selectionStart,
        }
      : inputData;
  };
}

function formatValue(mask: string | undefined, value: string): string {
  const parsedData: ParsedData | null = parseInputValue(mask, value);

  if (!parsedData) return `+${value}`;

  if (parsedData.lastNum) {
    return `+${parsedData.mask} ${parsedData.cityCode} ${parsedData.middleCode} ${parsedData.lastNum}`;
  } else if (parsedData.middleCode) {
    return `+${parsedData.mask} ${parsedData.cityCode} ${parsedData.middleCode}`;
  } else if (parsedData.cityCode) {
    return `+${parsedData.mask} ${parsedData.cityCode}`;
  } else {
    return `+${value}`;
  }
}

function parseInputValue(mask: string | undefined, value: string): ParsedData | null {
  if (!mask) return null;

  const matchMask = value.length >= mask.length && value.substring(0, mask.length) === mask;

  if (!matchMask) return null;

  let start = mask.length;
  const cityCode = value.substring(start, start + 3);
  start += 3;
  const middleCode = value.substring(start, start + 3);
  start += 3;
  const lastNum = value.substring(start, start + 4);

  return { mask, cityCode, middleCode, lastNum };
}
