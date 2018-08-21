<template>
	<div>
		a
	</div>
</template>

<script>
import exampleApi from '~/mixins/api/example'

export default {
	name: 'MainPage',
	mixins: [exampleApi],
	components: {

	},
	data () {
		return {
			exampleData: ''
		}
	},
	created () {

	},
	methods: {

	},
	computed: {

	},
	destroyed () {

	}
}
</script>
