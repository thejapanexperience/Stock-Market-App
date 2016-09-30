import React, { Component } from 'react'
import { get } from 'axios'
import jsonp from 'jsonp'
import StockStore from '../stores/StockStore'
import StockActions from '../actions/StockActions'

export default class StockListing extends Component {
  
constructor() {

  super();

    this.state = {
      stockListing: StockStore.getStockListing(),
      stockQuote: StockStore.getStockQuote(),
    }
    this._onChange = this._onChange.bind(this)
  }

  componentWillMount() {
    StockStore.startListening(this._onChange);
  }

  componentWillUnmount() {
    StockStore.stopListening(this._onChange);
  }

  _onChange() {
    this.setState ({
      stockListing: StockStore.getStockListing(),
      stockQuote: StockStore.getStockQuote(),
    })
  }

  render() {

    let { stockListing, stockQuote } = this.state;

    if(stockListing.length > 0) {
    return (
      <div className="container text-center col-xs-12">
         <h1>{stockListing[0].Name}</h1>
         <h1>Company Symbol : {stockListing[0].Symbol}</h1>
         <h1>Current Price : {stockQuote.LastPrice}</h1>
         <h1>Exchange : {stockListing[0].Exchange}</h1>
       </div>  
    )} else {
      return (
      <div className="container text-center col-xs-12">
         <h1>No Data Available</h1>
         <h1>Please input the name or symbol again</h1>
       </div>  
    )
    }

  }
}
