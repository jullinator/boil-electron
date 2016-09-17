const {auth} = require('./initFire')
const listener = require('./emitter') 

listener.on('auth-create', (email, password)=>{	
		auth.createUserWithEmailAndPassword(email,password)	
		})
listener.on('auth-login', (email, password) => {
		auth.signInWithEmailAndPassword(email,password)
})
