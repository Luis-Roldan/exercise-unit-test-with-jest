// const { sum } = require('./app.js')

// test('adds 14 + 9 to equal 23', () => {

//     let total = sum(14,9);

//     expect(total).toBe(23);
// })




test('Yen value', function() {

    const { fromDollarToYen } = require('./app.js')

    const yen = fromDollarToYen(2);

    const expected = (2 * 1.07) * 156.5;

    expect(fromDollarToYen(2)).toBe(334.91);
}) 


test('dolar value', function() {

    const { fromEuroToDollar } = require('./app.js')

    const dollar = fromEuroToDollar(2);

    const expected = 2 * 1.07;

    expect(fromEuroToDollar(2)).toBe(2.14);
}) 




test('pound value', function() {

    const { fromYenToPound } = require('./app.js')

    const pound = fromYenToPound(1);

    const expected = ((1 * 1.07) * 156.5) * 0.87

    expect(fromYenToPound(1)).toBe(145.69);
}) 
