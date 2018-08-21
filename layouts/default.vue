<template>
	<div>
		<Navbar />
		<Welcome />
		<WhatWeDo />
	</div>
</template>

<script>
import Navbar from '~/components/Navbar'
import Welcome from '~/components/Welcome'
import WhatWeDo from '~/components/WhatWeDo'

export default {
	components: {
		Navbar,
		Welcome,
		WhatWeDo
	}
}
</script>

<style>

</style>
