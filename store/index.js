import Vuex from 'vuex'
import exampleModule from './modules/example'

const store = () => {
	return new Vuex.Store({
		modules: {
			example: exampleModule
		},
		actions: {
			async nuxtServerInit (ctx, { req, $axios, redirect }) {

			}
		}
	})
}

export default store
