import { validCountries } from "../country/countries"
import { validCurrencies } from "../currencies"

export const getAllCountries = () => validCountries

export const compareCountryWithCurrency = (
  countryCode: string,
  currencyCode: string,
) => {
  if (validCountries[countryCode]) {
    return validCountries[countryCode].currency.includes(currencyCode)
  }
  return false
}

export const isValidCurrency = (currencyCode: string) => {
  return validCurrencies.includes(currencyCode)
}

export const isValidCountry = (countryCode: string) => {
  return validCountries[countryCode]
}
