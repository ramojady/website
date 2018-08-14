import endpoints from '~/constants/endpoints'

export default {
	methods: {
		async example () {
			try {
				const response = await this.$axios.get(endpoints.EXAMPLE_ENDPOINT)
				return response.data.response
			} catch (error) {
				console.error(error)
				return error
			}
		}
	}
}
