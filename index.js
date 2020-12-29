const stock = require('finance.js');
// defined everything 


// v0.1.0 and above
stock.getInfo('AAPL')
.then( (data) => {
    console.log(JSON.stringify(data, null, 4));
});

stock.getFinancial('AAPL')
.then( (data) => {
    console.log(JSON.stringify(data, null, 4));
});

stock.getnspa('AAPL')
.then( (data) => {
    console.log(JSON.stringify(data, null, 4));
});

stock.getCompany('AAPL')
.then( (data) => {
    console.log(JSON.stringify(data, null, 4));
});


stock.random(5, 10)





// v0.1.0 and below
stock.get("AAPL")
stock.get.company("AAPL")
stock.get.financial("AAPL")
stock.netSharePurchaseActivity("AAPL")
