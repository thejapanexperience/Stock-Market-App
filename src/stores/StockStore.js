import { EventEmitter } from 'events';
import AppDispatcher from '../AppDispatcher';
import Storage from '../Storage';

let _stockListing = Storage.read('stockListing') || [];
let _stockQuote = Storage.read('stockQuote') || [];


class StockStore extends EventEmitter{

  constructor () {
    super();

    AppDispatcher.register(action => {

      switch(action.type) {

        case 'RECEIVE_STOCK_LISTING': {
          _stockListing = action.payload.data
          if (_stockQuote.length === 0) {
            _stockQuote = [];
          }
          console.log('StockStore receive stock listing ', _stockListing)
          this.emit('CHANGE');
          break;  
          }

        case 'RECEIVE_STOCK_QUOTE': {
          _stockQuote = action.payload.data
          console.log('StockStore receive stock quote ', _stockQuote)
          this.emit('CHANGE');
          break; 
          
           
          }
      }})
    
    this.on('CHANGE',() => {
      Storage.write('stockListing', _stockListing)
      Storage.write('stockQuote', _stockQuote)
    })
    


  }

  startListening(cb) {
    this.on('CHANGE', cb);
  }

  stopListening(cb) {
    this.removeListener('CHANGE', cb)
  }

  getStockListing() {
    return _stockListing;
  }

  getStockQuote() {
    return _stockQuote;
  }

}


export default new StockStore();