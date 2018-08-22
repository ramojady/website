<template>
	<div class="member-card is-absolutely-centered has-text-centered">
		<div class="m-b-20">
			<i
				class="icon"
				:class="[iconPrefix, iconSuffix]"/>
		</div>
		<div
			class="member-card-name is-size-5">
			{{ name }}
		</div>
		<div
			class="member-card-title is-size-6">
			{{ title }}
		</div>
	</div>
</template>

<script>
export default {
	name: 'MemberCard',
	props: {
		title: {
			type: String,
			required: true,
			default: 'Team Member'
		},
		name: {
			type: String,
			required: true,
			default: 'Jan Kowalski'
		},
		iconPrefix: {
			type: String,
			required: true,
			default: 'fas'
		},
		iconSuffix: {
			type: String,
			required: true,
			default: 'fa-user'
		},
		description: {
			type: String,
			required: false,
			default: 'Description'
		}
	}
}
</script>

<style>

</style>
