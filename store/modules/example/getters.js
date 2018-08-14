export default {
	getValue (state) {
		return state.value
	},
	isValueSet (state) {
		return !(state.value === undefined || state.value === null || state.value === '')
	}
}
