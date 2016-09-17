var Button = require('./button')
const Emitter = require('events')

const Listener = {
	div: (text, targetId="top")=>{
		const controller = new Emitter()

		let div = document.createElement('DIV')
		div.textContent = text
		let target = document.getElementById(targetId)
		target.appendChild(div)
		div.style.background = 'steelblue'
		div.addEventListener('mousemove',function(event){
			let {clientX, clientY} = event
			div.innerHTML = `<h2> x: ${clientX} </h2>
							<h2> y: ${clientY} </h2>`
			bg = 'steelblue'
			clientX > 1000 ? (bg='red') : (bg='yellow')
			clientY < 100 ? (bg='green') : null
			
			div.style.color = `rgb(${clientY}, ${clientX}, 100)`
			div.style.height = clientY
		})
		controller.on('anim-start', (time=20, limit = 400)=>{  
				let height = 200
				let anim = setInterval(()=>update() , time)
				const update = () => {
					height < limit ? (height += limit/height ) : (height=200);
					div.style.height = height
				}
				return anim
		})
		

		return controller
	}
}

module.exports = {
	Button,
	Listener
}