var Emitter = require('events')
const {autorun,extendObservable, observable} = require('mobx')

class Button extends Emitter {
	constructor(id){
		super()
		this.el = document.getElementById(id)

		extendObservable(this,{
			clicks:0,
			text:'text',
			color:'steelblue'
		})
		let {style} = this.el

		style.fontSize = 50
		style.color = 'steelblue'
		style.border = '2px black solid'
		let {backgroundColor } = style
		

		this.listen()

		autorun(()=>this.emit('update'))


	}
	listen(){
		this.on('click',()=>{
			this.clicks++
			this.clicks % 2 ? this.text='odd':this.text='even'
		})
		
	}

	render(id="app"){
		document.body.appendChild(this.el)
	}

}
module.exports = Button