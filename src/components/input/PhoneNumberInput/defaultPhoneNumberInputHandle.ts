import { InputData } from '#/components/common/dom/changeInputData';

export interface ICountry {
  code: string;
  iso3: string;
}

class Handler {
  private directlyChangMode: boolean;
  private maxCodeLength: number;
  private countriesList: Array<ICountry>;
  private selectedCountry: ICountry | null;
  private inputValue: string;
  private cityCode: string;
  private middleCode: string;
  private lastNum: string;
  #currentCountryIndex: number;
  #currentCountry: ICountry | null;
  #countryCode: string;

  constructor() {
    this.countriesList = [];
    this.selectedCountry = null;
    this.inputValue = '';
    this.#countryCode = '';
    this.cityCode = '';
    this.middleCode = '';
    this.lastNum = '';
    this.directlyChangMode = false;
    this.maxCodeLength = 0;
    this.#currentCountry = null;
    this.#currentCountryIndex = -1;
  }

  setSelectedCountry(country: ICountry | null) {
    this.currentCountry = country;
    this.selectedCountry = country;
  }

  setCountriesList(list: Array<ICountry>): void {
    this.countriesList = list;

    if (this.currentCountry && !list.includes(this.currentCountry)) {
      this.currentCountry = null;
    }

    let length = 0;
    list.forEach((country: ICountry) => {
      const val = country.code.replace(/\D/g, '').length;
      if (val > length) length = val;
    });

    this.maxCodeLength = length;
  }

  beginDirectlyChange() {
    this.directlyChangMode = true;
  }

  endDirectlyChange() {
    this.directlyChangMode = false;
  }

  inDirectlyChangeMode(): boolean {
    return this.directlyChangMode;
  }

  get currentCountryIndex(): number {
    return this.#currentCountryIndex;
  }

  public get currentCountry(): ICountry | null {
    return this.#currentCountry;
  }

  private set currentCountry(value: ICountry | null) {
    if (value !== this.#currentCountry) {
      this.#currentCountry = value;
      this.#currentCountryIndex = value ? this.countriesList.findIndex((item) => item === value) : -1;
      this.countryCode = value ? value.code : '';
    }
  }

  private set countryCode(value: string) {
    this.#countryCode = value.replace(/\D/g, '');
  }

  #parseInputValue(value: string) {
    if (this.currentCountry) {
      let start = this.#countryCode.length;
      this.cityCode = value.substring(start, start + 3);
      start += 3;
      this.middleCode = value.substring(start, start + 3);
      start += 3;
      this.lastNum = value.substring(start, start + 4);
    } else {
      this.cityCode = '';
      this.middleCode = '';
      this.lastNum = '';
    }
  }

  get formattedValue(): string {
    if (this.lastNum) {
      return `+${this.#countryCode} ${this.cityCode} ${this.middleCode} ${this.lastNum}`;
    } else if (this.middleCode) {
      return `+${this.#countryCode} ${this.cityCode} ${this.middleCode}`;
    } else if (this.cityCode) {
      return `+${this.#countryCode} ${this.cityCode}`;
    } else {
      return `+${this.inputValue}`;
    }
  }

  setCurrentValue(value: string) {
    const newValue = value.replace(/\D/g, '');
    if (this.inputValue !== newValue) {
      this.inputValue = newValue;
      if (!this.directlyChangMode) {
        this.currentCountry = this.#findAndPrioritizeCountry(newValue);
      }
      this.#parseInputValue(newValue);
    }
  }

  #findAndPrioritizeCountry(value: string): ICountry | null {
    if (!value) return null;

    let country = this.#findCountry(value);

    if (country && country !== this.selectedCountry) {
      /** prioritize RUS over KAZ and USA over CAN */
      let priorityCountry: ICountry | undefined;
      if (country.code === '+7') {
        priorityCountry = this.countriesList.find((country) => country.iso3 === 'RUS');
      } else if (country.code === '+1') {
        priorityCountry = this.countriesList.find((country) => country.iso3 === 'USA');
      }

      country = priorityCountry || country;
    }
    return country;
  }

  #findCountry(value: string): ICountry | null {
    let country: ICountry | null = null;
    const length = this.maxCodeLength > value.length ? value.length : this.maxCodeLength;

    for (let i = 1; i <= length; i++) {
      const code = value.slice(0, i);

      const foundCountry: ICountry | undefined = this.countriesList.find((country) => {
        const clearCountryCode = country.code.replace(/\D/g, '');
        return clearCountryCode === code;
      });

      if (foundCountry) {
        country = foundCountry;
      }
    }

    return country;
  }
}

export const handler = new Handler();

export function defaultPhoneNumberInputHandle(inputData: InputData): InputData {
  let selectionStart = inputData.selectionStart || 1;
  handler.setCurrentValue(inputData.value || '');

  const value = handler.formattedValue;

  if (inputData.value?.substring(0, 1) !== '+' || handler.inDirectlyChangeMode()) {
    selectionStart = value.length;
  }

  const positionWithSpaceBefore = /\d/.test(value.charAt(selectionStart)) && value.charAt(selectionStart - 1) === ' ';

  const oldNextChar = inputData.value
    ? inputData.value.length >= selectionStart
      ? inputData.value.charAt(selectionStart).trim()
      : null
    : null;

  if (positionWithSpaceBefore && !oldNextChar) {
    selectionStart += 1;
  }

  return {
    ...inputData,
    value: handler.formattedValue,
    selectionStart,
    selectionEnd: selectionStart,
  };
}
