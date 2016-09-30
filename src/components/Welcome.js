import React, { Component } from 'react'

export default class Welcome extends Component {
  constructor() {
    super();
  }

  componentDidMount() {
    console.log('welcome did mount')
  }

  componentWillUnmount() {
    console.log('welcome will unmount')
  }


  render() {
    return (
      <div className="container text-center col-xs-12">
        <h1 className='text-center'>Welcome to my amazing, incredible stock tracker! It has all the stocks! It's amazing, amazing. Just the best stock tracker.</h1>
        <br/><img className=".img-rounded img-responsive img-thumbnail" id="trump" src="//cdn.newsapi.com.au/image/v1/955fc62036e8611c3bb625242de05d87" alt=""/>
      </div>
    )
  }
}