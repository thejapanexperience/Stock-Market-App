import React from 'react'
import { render } from 'react-dom'

import './stores/StockStore'

import { Router, Route, IndexRoute, browserHistory } from 'react-router'

import Layout from './components/Layout'
import Welcome from './components/Welcome'
import StockPicker from './components/StockPicker'
import StockListing from './components/StockListing'
import StockQuote from './components/StockQuote'

render(
  <Router history={browserHistory}>
  
  <Route path='/Stock-Market-App/' component={Layout}>
    
    <IndexRoute component={Welcome}></IndexRoute>
    <Route path='/Stock-Market-App/stockPicker' component={StockPicker}></Route>
    <Route path='/Stock-Market-App/stockListing' component={StockListing}></Route>
    <Route path='/Stock-Market-App/stockQuote' component={StockQuote}></Route>
    
  </Route>

  </Router>,
  document.getElementById('root')
);
