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

  

  // fetchDefaultWeather() {
  //     $.get(`http://api.wunderground.com/api/04566820ef16d78a/conditions/q//autoip.json` , weather => {
  //     ServerActions.receiveWeather(weather)
  //   });

  // },

  // fetchForecast(location) {
  //     console.log(location)
  //     $.get(`http://api.wunderground.com/api/04566820ef16d78a/forecast/q/${location}.json` , forecast => {
  //     ServerActions.receiveForecast(forecast)
  //   });

  // },

  // fetchDefaultForecast() {
  //     $.get(`http://api.wunderground.com/api/04566820ef16d78a/forecast/q//autoip.json` , forecast => {
  //     ServerActions.receiveForecast(forecast)
  //   });

  // }

}

export default API;