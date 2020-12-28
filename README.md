# Stock.js


[![npm (scoped)](https://img.shields.io/npm/v/@joeleeofficial/stock.js.svg)](https://www.npmjs.com/package/stock.js)
[![npm bundle size (minified)](https://img.shields.io/bundlephobia/min/stock.s.svg)](https://www.npmjs.com/package/stock.js)


## Install

```
$ npm install stock.js@latest
```
## Version 

- v1.0.0@latest





## Usage

### Get Financial Data
```js
const stock = require("stock.js");

// To Get Financial Data, Do

stock.get("GOOGL") // this is an example for GOOGL

For Example, You Will Get This 
[
  { quote: 'GOOGL',
  currentPrice: 1734.16,
  targetHighPrice: 2250,
  targetLowPrice: 1420,
  targetMeanPrice: 1911.79,
  targetMedianPrice: 1950,
  recommendationMean: 1.8,
  recommendationKey: 'buy',
  numberofAnalystOpinions: 36,
  totalCash: 132595998720,
  totalCashFormat: '132.6B',
  totalCashPerShare: 196.024,
  ebitda: 48075001856,
  ebitdaFormat: '48.08B',
  totalDebt: 27541999616,
  quickRatio: 3.28,
  currentRatio: 3.41,
  totalRevenue: 171703992320,
  totalRevenueFormat: '171.7B',
  debtToEquity: 12.935,
  revenuePerShare: 250.985,
  returnOnAssets: 0.07745,
  returnOnAssetsFormat: '7.74%',
  returnOnEquity: 0.17511,
  returnOnEquityFormat: '17.51%',
  grossProfits: 89961000000,
  grossProfitsFormat: '89.96B',
  freeCashFlow: 28147499008,
  freeCashFlowFormat: '28.15B',
  operatingCashFlow: 56874000384,
  operatingCashFlowFormat: '56.87B',
  earningsGrowth: 0.62,
  revenueGroth: 0.14,
  revenueGrothFormat: '14.00%',
  grossMargins: 0.53599,
  grossMarginsFormat: '53.60%',
  ebitdaMargins: 0.27999002,
  ebitdaMarginsFormat: '28.00%',
  operatingMargins: 0.2029,
  profitMargins: 0.20798999,
  profitMarginsFormat: '20.80%',
  financialCurrency: 'USD' }
  
  ] 


```
### Get Final Data

```


stock.finance("GOOGL") // An Example For GOOGL

you will get something like this :
[
  { quote: 'GOOGL',
  fiftyTwoWeekRange: '1008.87 - 1843.83',
  fiftyTwoWeekLow: 1008.87,
  fiftyTwoWeekHigh: 1843.83,
  trailingPE: 33.509045,
  epsTrailingTwelveMonths: 51.752,
  epsForward: 61.25,
  epsCurrentYear: 51.61,
  priceEpsCurrentYear: 33.601242,
  sharesOutstanding: 300644000,
  bookValue: 314.169,
  marketCap: 1174577872896,
  forwardPE: 28.312817,
  priceToBook: 5.5198317,
  fullExchangeName: 'NasdaqGS' }
  ]



```


### Get Company Information 


```

stock.getCompany("GOOGL") // Example : GOOGL


you will get something like this in you console
note : the data down here is a fake data

[
  { quote: 'GOOGL',
  address1: '1600 Amphitheatre Parkway',
  city: 'Mountain View',
  state: 'CA',
  zipCode: '94043',
  country: 'United States',
  contactNumber: '000-000-000', 
  website: 'http://www.abc.xyz',
  industry: 'Internet Content & Information',
  sector: 'Communication Services',
  businessSummary:
   '--something--',
  fullTimeEmployees: 132121,
  headCompanyOfficers: 'Mr. Sundar  Pichai' }
]

```


### Get netSharePurchaseActivity
```

stock.netSharePurchaseActivity("GOOGL") // an example for google

you will get something like this : 
[
  { quote: 'GOOGL',
  buyInfoCount: 1,
  buyInfoShares: 1459,
  buyPercentInsiderShares: 0.002,
  sellInfoCount: 6,
  sellInfoShares: 334,
  netInfoCount: 7,
  netInfoShares: 1125,
  netPercentInsiderShares: 0.001,
  totalInsiderShares: 825240 }
]
```


### More Example 

```
Change The Value To Get Data From Different Company

Example :
stock.get("AAPL")

Make Sure The Value Is Valid !
```


## Author 

- [@joeleeofficial](https://github.com/joeleeofficial)
- [Contact @joeleeofficial](mailto:tojoeleeofficial@gmail.com)



### Need Help ? 

[Join stock.js Discord Community Now](https://discord.gg/hZMCwDXfQb)
