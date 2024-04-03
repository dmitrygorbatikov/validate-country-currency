import { validCountries } from "../country/countries"

export const getAllCountries = () => validCountries

export const compareCountryWithCurrency = (
  countryCode: string,
  currencyCode: string,
) => {
  if (validCountries[countryCode]) {
    return validCountries[countryCode].currency.includes(currencyCode)
  }
  throw new Error("Country code is not exist")
}
