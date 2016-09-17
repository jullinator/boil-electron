const Emitter = require('events')

let event = new Emitter()

event.on('set-filename', function(filename){
  this.filename = filename
})
event.on('set-dirname', function(dirname=`${__dirname}/../../assets/`){
  this.dirname = dirname
})
event.on('load-data', function(){
    this.data = new Uint8Array(fs.readFileSync(this.dirname + this.filename ));
})
