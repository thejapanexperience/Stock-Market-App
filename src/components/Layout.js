import React, { Component } from 'react'
import { Link } from 'react-router'

export default class Layout extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
      <br/>
      <div className="container" id="mainContainer">
      <div className='container text-center col-xs-5'>
      <br/>
        <h1 className='text-center'>The TrumpXchange</h1>

        <div className="row">
          <Link className="btn btn-info" to='/'>
            TrumpXchange
          </Link>
          <span>  </span>
          <Link className="btn btn-warning" to='/stockPicker' activeClassName='disabled'>
            Choose Stock
          </Link>
          <span>  </span>
          <Link className="btn btn-danger" to='/stockListing' activeClassName='disabled'>
            Listing Info
          </Link>
          <span>  </span>
          <Link className="btn btn-success" to='/stockQuote' activeClassName='disabled'>
            Detailed Quote
          </Link>

        </div>

        {this.props.children}

      </div>
      </div>
      </div>
    )
  }
}
