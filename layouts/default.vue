<template>
	<div>
		<Navbar />
		<Welcome />
		<Services />
		<History />
	</div>
</template>

<script>
import Navbar from '~/components/Navbar'
import Welcome from '~/components/Welcome'
import Services from '~/components/Services'
import History from '~/components/History'

export default {
	components: {
		Navbar,
		Welcome,
		Services,
		History
	}
}
</script>

<style>

</style>
