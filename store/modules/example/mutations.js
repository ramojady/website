export default {
	SET_EXAMPLE_VALUE: (state, newValue) => {
		state.value = newValue
	},
	RESET_EXAMPLE_VALUE: (state) => {
		state.value = ''
	}
}
