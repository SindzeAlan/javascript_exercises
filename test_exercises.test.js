const { eulerRoundedNumber } = require('./exercise1');
const { findMax } = require('./exercise2');
const { productPurchased } = require('./exercise3');
const { sortedNumbersAscendingOrder } = require('./exercise4');
const { calculateAreaCircle } = require('./exercise6');
const { multiplicationAndDivision } = require('./exercise13');
const { largestEvenNumber } = require('./exercise15');
const { valuesExtractedByIndexes } = require('./exercise20');

//Test for exercise 1
test("euler's number rounded to four decimal places: 2.7183", () => {
  expect(eulerRoundedNumber(2.71828)).toBe(2.7183);
})

//Test for exercise 2
test("Maximum number equals 100", () => {
  expect(findMax([1, 5, 80, 7, 9, 100])).toEqual(100);
})

//Test for exercise 3
test('returns the correct purchase message using template literals', () => {
  expect(productPurchased("Chocolate", 5, 50)).toBe('You purchased 5 units of Chocolate for $250');
})

//Test for exercise 4
test('combined arrays sorted in ascending order', () => {
  expect(sortedNumbersAscendingOrder([6, 5, 4], [3, 1, 2])).toEqual([1, 2, 3, 4, 5, 6]);
})

//Test for exercise 6
test("Calculates area of a circle with it's radius and returns equivalent result but if no radius, returns 'Radius is missing!'", () => {
  expect(calculateAreaCircle(2)).toBeCloseTo(12.57);
  expect(calculateAreaCircle()).toMatch('Radius is missing!')
})

//Test for exercise 13
test('calculates the multiplication and division of 3 and 2 and result 6, 1.5', () => {
  expect(multiplicationAndDivision(3, 2)).toMatch('The multiplication of the two numbers is : 6 and Division is 1.5')
})

//Test for exercise 15
test('checks for the largest even number', () => {
  const numbers = [1, 2, 3, 40, 5, 6, 7, 8, 9, 10, 20, 15, 14, 99, 90];
  expect(largestEvenNumber(numbers)).toEqual(90)
})

//Test for exercise 20
test('extract values at specified indexes of an array', () => {
  const arrayOfIntergers = [2, 4, 8, 90, 12];
  const indexes = [0,4,2];
  expect(valuesExtractedByIndexes(arrayOfIntergers, indexes)).toEqual([2, 12, 8])
})