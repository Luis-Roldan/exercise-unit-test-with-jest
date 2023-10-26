// const sum = (a,b) => {
//     return a + b;
// }

// console.log(sum(7,3))

// module.exports = { sum };


// One euro is:
// let oneEuroIs = {
//     "JPY": 156.5, // japan yen
//     "USD": 1.07, // us dollar
//     "GBP": 0.87, // british pound
// }


// 1 EUR (Euro) = 1.07 USD (US Dollar)

const fromDollarToYen = function(valueInEuro) {

    let valueInYen = (valueInEuro * 1.07) * 156.5;

    return valueInYen
}
// module.exports = { fromDollarToYen };

const fromEuroToDollar = function(valueInEuro) {

    let valueInDollar = valueInEuro * 1.07;

    return valueInDollar;
}
// module.exports = { fromEuroToDollar };

const fromYenToPound = function(valueInEuro) {

    let valueInPound = (((valueInEuro* 1.07) * 156.5) * 0.87);

    return parseFloat(valueInPound.toFixed(2))
}
module.exports = { fromYenToPound, fromDollarToYen, fromEuroToDollar };