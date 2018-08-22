<template>
	<div>
		<Navbar />
		<Welcome />
		<Services />
	</div>
</template>

<script>
import Navbar from '~/components/Navbar'
import Welcome from '~/components/Welcome'
import Services from '~/components/Services'

export default {
	components: {
		Navbar,
		Welcome,
		Services
	}
}
</script>

<style>

</style>
