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

}

export default ServerActions;