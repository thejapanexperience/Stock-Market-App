import React, { Component } from 'react'
import { get } from 'axios'
import jsonp from 'jsonp'
import StockStore from '../stores/StockStore'
import StockActions from '../actions/StockActions'

export default class StockQuote extends Component {
  
constructor() {

  super();

    this.state = {
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
      stockQuote: StockStore.getStockQuote(),
    })
  }

  render() {

    let { stockQuote } = this.state;

    console.log('StockQuote stockQuote', stockQuote)

    if (stockQuote.Symbol) {
      return (
      <div className="container text-center col-xs-12">
         <h1>{stockQuote.Name}</h1>
         <h1>Company Symbol : {stockQuote.Symbol}</h1>
         <h1>Trading Volume : {stockQuote.Volume}</h1>
         <h1>Opening Price : {stockQuote.Open}</h1>
         <h1>Most Recent Price : {stockQuote.LastPrice}</h1>
         <h1>Today's High : {stockQuote.High}</h1>
         <h1>Today's Low : {stockQuote.Low}</h1>
         <h1>{stockQuote.Timestamp}</h1>
       </div>  
    )
    } else {
      return (
      <div className="container text-center col-xs-12">
         <h1>No Data Available</h1>
         <h1>Please input the name or symbol again</h1>
       </div>  
    )
    }
  }
}
