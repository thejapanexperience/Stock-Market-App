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
  <Router >
{/*  <Router history={browserHistory}>
*/}  
  <Route path='stockPicker/' component={Layout}>
    
    <IndexRoute component={Welcome}></IndexRoute>
    <Route path='/stockPicker' component={StockPicker}></Route>
    <Route path='/stockListing' component={StockListing}></Route>
    <Route path='/stockQuote' component={StockQuote}></Route>
    
  </Route>

  </Router>,
  document.getElementById('root')
);
