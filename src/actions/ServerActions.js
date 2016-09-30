import AppDispatcher from '../AppDispatcher'

const ServerActions = {

  receiveStockListing(data) {
    AppDispatcher.dispatch({
      type: 'RECEIVE_STOCK_LISTING',
      payload: { data }
    })
  },

  receiveStockQuote(data) {
    AppDispatcher.dispatch({
      type: 'RECEIVE_STOCK_QUOTE',
      payload: { data }
    })
  },

  // receiveWeather(weather) {
  //   AppDispatcher.dispatch({
  //     type: 'RECEIVE_WEATHER',
  //     payload: { weather }
  //   })
  // },

  // receiveForecast(forecast) {
  //   AppDispatcher.dispatch({
  //     type: 'RECEIVE_FORECAST',
  //     payload: { forecast }
  //   })
  // }
}

export default ServerActions;