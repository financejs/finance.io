const stock = require('stock.js');
// defined everything 

stock.data.getQuote('AAPL')
.then( (data) => {
    console.log(JSON.stringify(data, null, 4));
});

console.log(stock.random(5, 10))


stock.get("AAPL")
stock.getCompany("AAPL")
stock.getInfo("AAPL")
