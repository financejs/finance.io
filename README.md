# Finance.io
 
[![npm (scoped)](https://img.shields.io/npm/v/finance.io.svg)](https://www.npmjs.com/package/finance.io)
[![npm bundle size (minified)](https://img.shields.io/bundlephobia/min/finance.io.svg)](https://www.npmjs.com/package/finance.io)

 <a href="https://nodei.co/npm/finance.io/"><img src="https://nodei.co/npm/finance.io.png?downloads=true&stars=true" alt="NPM info" /></a>



## Install

```
$ npm install finance.io@latest
```

### Define finance.io


```
const stock = require('finance.io')
```


## Version 

- v0.1.4@latest

- v0.1.3

- v0.1.2

- v0.1.1

- v0.1.0

- v0.0.9 <




## Usage

> Recommend Using Version 0.1.0 And Above

#### Formats

```
// Example

stock.getInfo("GOOGL").then( (data) => {
   // You May Modify The Output
   // default : console.log(JSON.stringify(data, null, 4)
   // note : Please Use "JSON.stringify(data, null, 4)" // In Every Output
});
```

### Get Stock Quote Data

To Get Stock Quote Of GOOGL Use The Code Snippet Below.

```
// v0.1.0 and above

stock.getInfo("GOOGL").then( (data) => {
    console.log(JSON.stringify(data, null, 4));
});


// v0.1.0 below

stock.get("GOOGL") // returning the data in console.log


// Returning Data 

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

### Get Company Data

Get Specific Company Data

```
// v0.1.0 and above

stock.getCompany("AAPL").then( (data) => {
    console.log(JSON.stringify(data, null, 4));
});


// v0.1.0 below

stock.get.company("AAPL")


// Returning Data

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

### Get Filtered Financial Data

```

// v0.1.0 and above

stock.getFinancial("GOOGL").then( (data) => {
    console.log(JSON.stringify(data, null, 4));
});


// v0.1.0 below

stock.get.financial("GOOGL")


// Returning Data 

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


### Get netSharePurchaseActivity

```
// v0.1.0 and Above

stock.nspa("GOOGL").then( (data) => {
  console.log(JSON.stringify(data, null, 4));
});



// v0.1.0 below
stock.netSharePurchaseActivity("GOOGL") 


// Returning Data

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

### Outside NYSE (stock.getFinancial)

> v0.1.0 and below will not work as the same way


Stocks Outside NYSE Require A Corresponding Argument.
What You Need Is Just Adding A Comma And A Value.

```
// Karex, 5247.KL

// v0.1.0 and above
stock.getFinancial('5247', 'KL')
.then( (data) => {
  console.log(JSON.stringify(data, null, 4))
});


// v0.1.0 below

stock.get.financial("5247.KL")

// Returning Data

{
    "symbol": "5247",
    "data": "financial",
    "fiftyTwoWeekRange": "0.26 - 1.23",
    "fiftyTwoWeekLow": 0.26,
    "fiftyTwoWeekHigh": 1.23,
    "trailingPE": 10.985915,
    "epsTrailingTwelveMonths": 0.071,
    "sharesOutstanding": 1002370000,
    "bookValue": 0.464,
    "marketCap": 781848576,
    "priceToBook": 1.6810344,
    "fullExchangeName": "Kuala Lumpur"
}

```

### Test finance.io functions

```
stock.test()
```

## Extra Features

### Get A Random Number

Value Is Require. For Example : `stock.random(1,8)`
The Returning Data Should Be `1` to `8`

```
stock.random(1,8)

// Display The Data By Doing 

console.log(stock.random(1,8))


// Returning Data 

Example : `1.0246939366192591`
```


## Author 

- [@joeleeofficial](https://github.com/joeleeofficial)


### Contributors 

- [Joe Lee Official](mailto:tojoeleeofficial@gmail.com)


### Need Help ? 

[Join stock.js Discord Community Now](https://discord.gg/hZMCwDXfQb)


<a href="https://discord.gg/hZMCwDXfQb"><img src="https://discordapp.com/api/guilds/793118787460399154/embed.png?style=banner2"></a>


## License 


```

                    Apache License
              Version 2.0, January 2004
            http://www.apache.org/licenses/

   TERMS AND CONDITIONS FOR USE, REPRODUCTION, AND DISTRIBUTION

   1. Definitions.

      "License" shall mean the terms and conditions for use, reproduction,
      and distribution as defined by Sections 1 through 9 of this document.

      "Licensor" shall mean the copyright owner or entity authorized by
      the copyright owner that is granting the License.

      "Legal Entity" shall mean the union of the acting entity and all
      other entities that control, are controlled by, or are under common
      control with that entity. For the purposes of this definition,
      "control" means (i) the power, direct or indirect, to cause the
      direction or management of such entity, whether by contract or
      otherwise, or (ii) ownership of fifty percent (50%) or more of the
      outstanding shares, or (iii) beneficial ownership of such entity.

      "You" (or "Your") shall mean an individual or Legal Entity
      exercising permissions granted by this License.

      "Source" form shall mean the preferred form for making modifications,
      including but not limited to software source code, documentation
      source, and configuration files.

      "Object" form shall mean any form resulting from mechanical
      transformation or translation of a Source form, including but
      not limited to compiled object code, generated documentation,
      and conversions to other media types.

      "Work" shall mean the work of authorship, whether in Source or
      Object form, made available under the License, as indicated by a
      copyright notice that is included in or attached to the work
      (an example is provided in the Appendix below).

      "Derivative Works" shall mean any work, whether in Source or Object
      form, that is based on (or derived from) the Work and for which the
      editorial revisions, annotations, elaborations, or other modifications
      represent, as a whole, an original work of authorship. For the purposes
      of this License, Derivative Works shall not include works that remain
      separable from, or merely link (or bind by name) to the interfaces of,
      the Work and Derivative Works thereof.

      "Contribution" shall mean any work of authorship, including
      the original version of the Work and any modifications or additions
      to that Work or Derivative Works thereof, that is intentionally
      submitted to Licensor for inclusion in the Work by the copyright owner
      or by an individual or Legal Entity authorized to submit on behalf of
      the copyright owner. For the purposes of this definition, "submitted"
      means any form of electronic, verbal, or written communication sent
      to the Licensor or its representatives, including but not limited to
      communication on electronic mailing lists, source code control systems,
      and issue tracking systems that are managed by, or on behalf of, the
      Licensor for the purpose of discussing and improving the Work, but
      excluding communication that is conspicuously marked or otherwise
      designated in writing by the copyright owner as "Not a Contribution."

      "Contributor" shall mean Licensor and any individual or Legal Entity
      on behalf of whom a Contribution has been received by Licensor and
      subsequently incorporated within the Work.

   2. Grant of Copyright License. Subject to the terms and conditions of
      this License, each Contributor hereby grants to You a perpetual,
      worldwide, non-exclusive, no-charge, royalty-free, irrevocable
      copyright license to reproduce, prepare Derivative Works of,
      publicly display, publicly perform, sublicense, and distribute the
      Work and such Derivative Works in Source or Object form.

   3. Grant of Patent License. Subject to the terms and conditions of
      this License, each Contributor hereby grants to You a perpetual,
      worldwide, non-exclusive, no-charge, royalty-free, irrevocable
      (except as stated in this section) patent license to make, have made,
      use, offer to sell, sell, import, and otherwise transfer the Work,
      where such license applies only to those patent claims licensable
      by such Contributor that are necessarily infringed by their
      Contribution(s) alone or by combination of their Contribution(s)
      with the Work to which such Contribution(s) was submitted. If You
      institute patent litigation against any entity (including a
      cross-claim or counterclaim in a lawsuit) alleging that the Work
      or a Contribution incorporated within the Work constitutes direct
      or contributory patent infringement, then any patent licenses
      granted to You under this License for that Work shall terminate
      as of the date such litigation is filed.

   4. Redistribution. You may reproduce and distribute copies of the
      Work or Derivative Works thereof in any medium, with or without
      modifications, and in Source or Object form, provided that You
      meet the following conditions:

      (a) You must give any other recipients of the Work or
          Derivative Works a copy of this License; and

      (b) You must cause any modified files to carry prominent notices
          stating that You changed the files; and

      (c) You must retain, in the Source form of any Derivative Works
          that You distribute, all copyright, patent, trademark, and
          attribution notices from the Source form of the Work,
          excluding those notices that do not pertain to any part of
          the Derivative Works; and

      (d) If the Work includes a "NOTICE" text file as part of its
          distribution, then any Derivative Works that You distribute must
          include a readable copy of the attribution notices contained
          within such NOTICE file, excluding those notices that do not
          pertain to any part of the Derivative Works, in at least one
          of the following places: within a NOTICE text file distributed
          as part of the Derivative Works; within the Source form or
          documentation, if provided along with the Derivative Works; or,
          within a display generated by the Derivative Works, if and
          wherever such third-party notices normally appear. The contents
          of the NOTICE file are for informational purposes only and
          do not modify the License. You may add Your own attribution
          notices within Derivative Works that You distribute, alongside
          or as an addendum to the NOTICE text from the Work, provided
          that such additional attribution notices cannot be construed
          as modifying the License.

      You may add Your own copyright statement to Your modifications and
      may provide additional or different license terms and conditions
      for use, reproduction, or distribution of Your modifications, or
      for any such Derivative Works as a whole, provided Your use,
      reproduction, and distribution of the Work otherwise complies with
      the conditions stated in this License.

   5. Submission of Contributions. Unless You explicitly state otherwise,
      any Contribution intentionally submitted for inclusion in the Work
      by You to the Licensor shall be under the terms and conditions of
      this License, without any additional terms or conditions.
      Notwithstanding the above, nothing herein shall supersede or modify
      the terms of any separate license agreement you may have executed
      with Licensor regarding such Contributions.

   6. Trademarks. This License does not grant permission to use the trade
      names, trademarks, service marks, or product names of the Licensor,
      except as required for reasonable and customary use in describing the
      origin of the Work and reproducing the content of the NOTICE file.

   7. Disclaimer of Warranty. Unless required by applicable law or
      agreed to in writing, Licensor provides the Work (and each
      Contributor provides its Contributions) on an "AS IS" BASIS,
      WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or
      implied, including, without limitation, any warranties or conditions
      of TITLE, NON-INFRINGEMENT, MERCHANTABILITY, or FITNESS FOR A
      PARTICULAR PURPOSE. You are solely responsible for determining the
      appropriateness of using or redistributing the Work and assume any
      risks associated with Your exercise of permissions under this License.

   8. Limitation of Liability. In no event and under no legal theory,
      whether in tort (including negligence), contract, or otherwise,
      unless required by applicable law (such as deliberate and grossly
      negligent acts) or agreed to in writing, shall any Contributor be
      liable to You for damages, including any direct, indirect, special,
      incidental, or consequential damages of any character arising as a
      result of this License or out of the use or inability to use the
      Work (including but not limited to damages for loss of goodwill,
      work stoppage, computer failure or malfunction, or any and all
      other commercial damages or losses), even if such Contributor
      has been advised of the possibility of such damages.

   9. Accepting Warranty or Additional Liability. While redistributing
      the Work or Derivative Works thereof, You may choose to offer,
      and charge a fee for, acceptance of support, warranty, indemnity,
      or other liability obligations and/or rights consistent with this
      License. However, in accepting such obligations, You may act only
      on Your own behalf and on Your sole responsibility, not on behalf
      of any other Contributor, and only if You agree to indemnify,
      defend, and hold each Contributor harmless for any liability
      incurred by, or claims asserted against, such Contributor by reason
      of your accepting any such warranty or additional liability.

   END OF TERMS AND CONDITIONS

   APPENDIX: How to apply the Apache License to your work.

      To apply the Apache License to your work, attach the following
      boilerplate notice, with the fields enclosed by brackets "[]"
      replaced with your own identifying information. (Don't include
      the brackets!)  The text should be enclosed in the appropriate
      comment syntax for the file format. We also recommend that a
      file or class name and description of purpose be included on the
      same "printed page" as the copyright notice for easier
      identification within third-party archives.

   Copyright 2020 - 2021 JoeLee

   Licensed under the Apache License, Version 2.0 (the "License");
   you may not use this file except in compliance with the License.
   You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.

```






