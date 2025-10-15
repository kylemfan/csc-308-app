// portfolio.js

class Portfolio {
  constructor(portfolioName) {
    this.portfolioName = portfolioName;
    this.stocks = {};
  }

  checkIfEmpty() {
    return Object.keys(this.stocks).length === 0;
  }

  buyStock(ticker, shareQuantity) {
    this.stocks[ticker] = shareQuantity;
  }

  sellStock(ticker, shareQuantity) {
    if (this.stocks[ticker] === undefined) {
      throw new Error("Stock not found in portfolio");
    } else if (this.stocks[ticker] < shareQuantity) {
      throw new Error("Not possible to sell this number of shares");
    }

    this.stocks[ticker] -= shareQuantity;
    if (this.stocks[ticker] < 1) {
      delete this.stocks[ticker];
    }
  }

  countCompanies() {
    return Object.keys(this.stocks).length;
  }

  getShares(ticker) {
    return this.stocks[ticker] || 0;
  }
}

module.exports = { Portfolio };