// sample-functions.test.js
const myFunctions = require('./sample-functions.js');

// Testing div()
test('Testing div with integers', () => {
  target = 5;
  result = myFunctions.div(15, 3);
  expect(result).toBe(target);
});

test('Testing div with decimal result', () => {
  target = 1.5;
  result = myFunctions.div(3, 2);
  expect(result).toBe(target);
});

test('Testing div with two decimals', () => {
  target = 0.75;
  result = myFunctions.div(1.5, 2);
  expect(result).toBe(target);
});

test('Testing div with one int & one decimal', () => {
  target = 200;
  result = myFunctions.div(100, 0.5);
  expect(result).toBe(target);
});

// Testing containsNumber()
test('Testing containsNumbers w/ one word & no numbers', () => {
  target = false;
  example = "Hello";
  result = myFunctions.containsNumbers(example);
  expect(result).toBe(target);
});

test('Testing containsNumbers w/ a number', () => {
  target = true;
  example = "Hello1";
  result = myFunctions.containsNumbers(example);
  expect(result).toBe(target);
});

test('Testing containsNumbers w/ two word & no numbers', () => {
  target = false;
  example = "Hello World";
  result = myFunctions.containsNumbers(example);
  expect(result).toBe(target);
});

test('Testing containsNumbers w/ two word & a number', () => {
  target = true;
  example = "Hello1 World";
  result = myFunctions.containsNumbers(example);
  expect(result).toBe(target);
});
