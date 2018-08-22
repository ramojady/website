<template>
	<div class="service-card is-absolutely-centered has-text-centered">
		<div class="icon-container m-b-20">
			<i
				class="icon"
				:class="[iconPrefix, iconSuffix]"/>
		</div>
		<div
			class="card-title is-size-4 is-uppercase">
			{{ title }}
		</div>
	</div>
</template>

<script>
export default {
	name: 'ServiceCard',
	props: {
		title: {
			type: String,
			required: true,
			default: 'Create beautiful website'
		},
		iconPrefix: {
			type: String,
			required: true,
			default: 'fas'
		},
		iconSuffix: {
			type: String,
			required: true,
			default: 'fa-brain'
		}
	}
}
</script>

<style>

</style>
