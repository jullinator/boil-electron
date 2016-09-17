
const vForm	= Vue.extend({

		props:['show'],
	 	template:`
		 	<div v-show="show" class="row card-panel green lighten-4" >
		 		<slot></slot>
		 	</div>
		 	`,
})

module.exports = vForm