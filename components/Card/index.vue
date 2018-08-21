<template>
	<div class="card">
		<div
			class="title">
			{{ title }}
		</div>
		<div class="description">
			{{ description }}
		</div>
	</div>
</template>

<script>
export default {
	name: 'Card',
	props: {
		title: {
			type: String,
			required: true,
			default: 'Create beautiful website'
		},
		description: {
			type: String,
			required: false,
			default: ''
		}
	}
}
</script>

<style>

</style>
