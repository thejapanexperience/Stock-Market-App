import React, { Component } from 'react'
import { get } from 'axios'
import jsonp from 'jsonp'
import StockStore from '../stores/StockStore'
import StockActions from '../actions/StockActions'

export default class StockPicker extends Component {
  
constructor() {

  super();

    this.state = {
      stockListing: StockStore.getStockListing(),
    }
    this._onChange = this._onChange.bind(this)
    this._fetchStockInfo = this._fetchStockInfo.bind(this)
    this._fetchStockQuote = this._fetchStockQuote.bind(this)
  }

  componentWillMount() {
    StockStore.startListening(this._onChange);
    this.setState ({
      stockListing: StockStore.getStockListing(),
    })
  }

  componentWillUnmount() {
    StockStore.stopListening(this._onChange);
  }

  _onChange() {
    this.setState ({
      stockListing: StockStore.getStockListing(),
    })
  }

  _fetchStockInfo() {
    let { stockSymbol } = this.refs
    console.log('stockSymbol.value', stockSymbol.value)
    StockActions.fetchStockListing(stockSymbol.value);
    setTimeout(() => {
      this._fetchStockQuote()
    }, 1500)
    // StockActions.fetchStockQuote(stockSymbol.value);
  }

  _fetchStockQuote() {
    let { stockSymbol } = this.refs
    let { stockListing } = this.state
    console.log('StockPicker _fetchStockQuote stockListing', stockListing)
    if (stockListing.length === 0) {
    StockActions.fetchStockQuote(stockSymbol.value)   
    } else if (stockListing.hasOwnProperty('Message')) {
    StockActions.fetchStockQuote(stockSymbol.value)   
    } else if (stockListing[0].hasOwnProperty('Symbol')) {
    StockActions.fetchStockQuote(stockListing[0].Symbol)   
    } 
    
    // StockActions.fetchStockQuote(stockSymbol.value);
  }

  render() {

    let { stockListing } = this.state

    console.log(stockListing)

      if (stockListing.length === 0) {
        return (
      <div className="container text-center col-xs-12">
        <h1>Stock Symbol / Company Name</h1>
        <input ref='stockSymbol' type="text" placeholder="NFLX" className="btn btn-default"/>
        <span>  </span>
        <button id="submit" className="btn btn-primary" onClick={this._fetchStockInfo}>Submit</button>
      </div>
      )
      } else if (stockListing.hasOwnProperty('Message')) {
        return (
      <div className="container text-center col-xs-12">
        <h1>Stock Symbol / Company Name</h1>
        <input ref='stockSymbol' type="text" placeholder="NFLX" className="btn btn-default"/>
        <span>  </span>
        <button id="submit" className="btn btn-primary" onClick={this._fetchStockInfo}>Submit</button>
      </div>
      )
      } else if (stockListing[0].hasOwnProperty('Symbol')){
        console.log('1')
        return (
          <div className="container text-center col-xs-12">
            <h1>Stock Symbol / Company Name</h1>
              <input ref='stockSymbol' type="text" defaultValue={stockListing[0].Symbol} className="btn btn-default"/>
              <span>  </span>
              <button id="submit" className="btn btn-primary" onClick={this._fetchStockInfo}>Submit</button>
          </div>  
        )} else {
          console.log('2')
      return (
      <div className="container text-center col-xs-12">
        <h1>Stock Symbol / Company Name</h1>
        <input ref='stockSymbol' type="text" placeholder="NFLX" className="btn btn-default"/>
        <span>  </span>
        <button id="submit" className="btn btn-primary" onClick={this._fetchStockInfo}>Submit</button>
      </div>
      )}  
   
  }
}
