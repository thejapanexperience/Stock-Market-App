import $ from 'jquery';
import jsonp from 'jsonp'
import ServerActions from './actions/ServerActions'

const API = {

  fetchStockListing(symbol) {
      console.log('API fetchStockListing symbol ',symbol)
      jsonp(`http://dev.markitondemand.com/MODApis/Api/v2/Lookup/jsonp?input=${symbol}`, (err, data) => {
      ServerActions.receiveStockListing(data)
    });

  },

  fetchStockQuote(symbol) {
      console.log('API fetchStockQuote symbol ',symbol)
      jsonp(`http://dev.markitondemand.com/MODApis/Api/v2/Quote/jsonp?symbol=${symbol}`, (err, data) => {
      ServerActions.receiveStockQuote(data)
    });

  },

}

export default API;