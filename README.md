# validate-country-currency Library
### This library allows you to work with a list of countries and their corresponding currency codes in [ISO 3166-1 alpha-3](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-3) and [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) formats respectively. With this library, you can easily retrieve a list of all countries along with their currency information, as well as check whether a specific country matches a given currency code.

Installation
To install the library, simply run:

```npm install validate-country-currency```
Usage
javascript

```
import { getAllCountries, compareCountryWithCurrency } from 'validate-country-currency';

const countries = getAllCountries();

console.log(countries);
// Output:
// ...
// {
//   PRI: {
//     alpha3: 'PRI',
//     alpha2: 'PRI',
//     currency: [ 'USD' ],
//     name: 'Puerto Rico'
//   },
//   PRK: {
//     alpha3: 'PRK',
//     alpha2: 'PRK',
//     currency: [ 'KRW' ],
//     name: "Korea, Democratic People's Republic of"
//   },
//   PRT: {
//     alpha3: 'PRT',
//     alpha2: 'PRT',
//     currency: [ 'EUR' ],
//     name: 'Portugal'
//   },
//   ...
// }


console.log(compareCountryWithCurrency('UKR', 'UAH')); // true
console.log(compareCountryWithCurrency('USA', 'EUR')); // false

// Also you can chech country and currency as valid or not:

console.log(isValidCurrency('USD')) // true
console.log(isValidCurrency('ASFHSD')) // false
console.log(isValidCountry('UKR')) // true
console.log(isValidCountry('AFHDSJFSD')) // false

```
API
getAllCountries()
Retrieves a list of all countries along with their currency information.

compareCountryWithCurrency(countryCode, currencyCode)
Checks whether the specified country matches the given currency code.

License
This project is licensed under the MIT License - see the LICENSE.md file for details.