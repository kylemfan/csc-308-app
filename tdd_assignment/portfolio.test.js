// portfolio-tests.js
const { Portfolio } = require("./portfolio.js");
const techStocks = new Portfolio("Tech Stocks");

test("Testing portfolio creation", () => {
  const target = { portfolioName: "New Portfolio", stocks: {} };
  const result = new Portfolio("New Portfolio");
  expect(result).toEqual(target);
});

test('Testing checkIfEmpty', () => {
  const target = true;
  const testPortfolio = new Portfolio("Empty Portfolio");
  const result = testPortfolio.checkIfEmpty();
  expect(result).toBe(target);
});

test('Testing checkIfEmpty', () => {
  const target = false;
  const testPortfolio = new Portfolio("Non-Empty Portfolio");
  testPortfolio.stocks = {'AAPL': 5};
  const result = testPortfolio.checkIfEmpty();
  expect(result).toBe(target);
});

test('Testing buyStock', () => {
  const target = { portfolioName: 'Tech Stocks', stocks: {'AAPL': 5, 'NVDA': 3} }
  techStocks.buyStock('AAPL', 5);
  techStocks.buyStock('NVDA', 3);
  const result = techStocks;
  expect(result).toEqual(target);
});

test('Testing successful sellStock', () => {
  const target = { portfolioName: 'Tech Stocks', stocks: {'AAPL': 2} }
  techStocks.sellStock('NVDA', 3);
  techStocks.sellStock('AAPL', 3);
  result = techStocks;
  expect(result).toEqual(target);
});

test('Testing failing sellStock where stock is not owned', () => {
  const target = Error("Stock not found in portfolio");
  expect(() => {
    techStocks.sellStock('MSFT', 100);
  }).toThrow(target);
});

test('Testing failing sellStock where stock is not owned', () => {
  const target = Error("Not possible to sell this number of shares");
  expect(() => {
    techStocks.sellStock('AAPL', 100);
  }).toThrow(target);
});

test('Testing countCompanies', () => {
  const target = 1;
  const result = techStocks.countCompanies();
  expect(result).toBe(target);
});

test('Testing getShares w/ non-owned stock', () => {
  const target = 0;
  const result = techStocks.getShares('RBLX');
  expect(result).toBe(target);
});

test('Testing getShares w/ owned stock', () => {
  const target = 2;
  const result = techStocks.getShares('AAPL');
  expect(result).toBe(target);
});

// Reflection on TDD:
// For the most part, I was able to follow the test-first approach.
// However, there were moments where I felt that I had to at least have the
// skeleton of a function to better conceptualize how I was going to call them in a test.
// I believe that the test-first approach is a good approach not only because it paints
// a better picture of what you need from your code, but also because it saves the pain of
// having to write tests after you a huge chunk of code you may have just written.
// Personally, this is an approach that I enjoyed and will carry on with in the future.