<template>
	<div>
		<Navbar />
		<Welcome />
		<Services />
		<History />
		<MeetUs />
		<Contact />
	</div>
</template>

<script>
import Navbar from '~/components/Navbar'
import Welcome from '~/components/Welcome'
import Services from '~/components/Services'
import History from '~/components/History'
import MeetUs from '~/components/MeetUs'
import Contact from '~/components/Contact'

export default {
	components: {
		Navbar,
		Welcome,
		Services,
		History,
		MeetUs,
		Contact
	}
}
</script>

<style>

</style>
