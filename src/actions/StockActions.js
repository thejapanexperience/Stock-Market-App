import API from '../API'

const StockActions = {

  fetchStockListing(symbol) {
    API.fetchStockListing(symbol);
  },

  fetchStockQuote(symbol) {
    API.fetchStockQuote(symbol);
  },

  // fetchDefaultWeather() {
  //   API.fetchDefaultWeather();
  // },

  //  fetchForecast(location) {
  //   API.fetchForecast(location);
  // },

  // fetchDefaultForecast() {
  //   API.fetchDefaultForecast();
  // }
}

export default StockActions