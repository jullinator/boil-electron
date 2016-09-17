const {Book, Page,  Sentence} = require('./schema')


const Emitter = require('events')
class Store extends Emitter {
  constructor(){
    
  }
}

module.exports = {
	Book, Page, Sentence
}