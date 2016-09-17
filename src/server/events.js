
const {ipcMain} = require('electron')
const Emitter = require('events')


ipcMain.on('test-message', (event, arg) => {
  event.sender.send('test-reply', 'i am the best')
})
ipcMain.on('read-pdf', (event, arg)=>{

})

const {autorun, observable, reaction, extendObservable} = require('mobx')

class State extends Emitter{
  constructor(){
    super()
    extendObservable(this,{
      count:0
    })
    autorun(() => {
        console.log('mobx val:'+this.count)
        this.emit('firebase-update', this.count)
      }
  )
    this.on('inc',()=>this.count++)
    this.on('dec',()=>this.count--)
    this.on('reset',()=>this.count=0)
  }
}

let state = new State()

ipcMain.on('state', (event, action)=>{
  state.emit(action)
  let {count} = state
  event.sender.send('state-changed',{count})
})





module.exports = {ipcMain, state}
