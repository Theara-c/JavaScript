let prices = [ 10, 20, 30, 40];
let discountedPrices = prices.map ( price => price *(80/100.0));
console.log(discountedPrices);
discountedPrices.forEach(print => console.log(`Discounted price: $${print} `));

