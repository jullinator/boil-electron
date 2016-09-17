const Emitter = require ('events')

class Store extends Emitter {

}

const listener = new Emitter () 

module.exports = listener 