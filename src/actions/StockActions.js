import API from '../API'

const StockActions = {

  fetchStockListing(symbol) {
    API.fetchStockListing(symbol);
  },

  fetchStockQuote(symbol) {
    API.fetchStockQuote(symbol);
  },
}

export default StockActions