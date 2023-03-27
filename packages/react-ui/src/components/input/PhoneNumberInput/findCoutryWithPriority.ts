import type { CountryAlpha3Code } from '@admiral-ds/flags';

export interface CountryPhoneCode {
  code: string;
  iso3: CountryAlpha3Code;
}

export type findCountryFunction = (inputValue: string) => CountryPhoneCode | null;

export default function getFindCountryFunction(countries: Array<CountryPhoneCode>): findCountryFunction {
  const lengths = countries.map((country: CountryPhoneCode) => country.code.replace(/\D/g, '').length);
  const maxLength = Math.max(...lengths);

  function findCountry(value: string): CountryPhoneCode | undefined {
    let country: CountryPhoneCode | undefined;
    const length = maxLength > value.length ? value.length : maxLength;

    for (let i = 1; i <= length; i++) {
      const code = value.slice(0, i);

      const foundCountry: CountryPhoneCode | undefined = countries.find((country) => {
        const clearCountryCode = country.code.replace(/\D/g, '');
        return clearCountryCode === code;
      });

      if (foundCountry) {
        country = foundCountry;
      }
    }

    return country;
  }

  function getPriorityCountry(country: CountryPhoneCode): CountryPhoneCode {
    switch (country.code) {
      case '+7':
        return countries.find((country) => country.iso3 === 'RUS') || country;
      case '+1':
        return countries.find((country) => country.iso3 === 'USA') || country;
      default:
        return country;
    }
  }

  return function (inputValue: string): CountryPhoneCode | null {
    const value = inputValue.replace(/\D/g, '');

    if (!value) return null;

    const country = findCountry(value);

    return country ? getPriorityCountry(country) : null;
  };
}
