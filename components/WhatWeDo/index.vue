<template>
	<section class="what-we-do opposite-color">
		<div class="container p-t-150 p-b-150">
			<div
				class="title-container title-font is-size-2 m-b-10"
				data-aos="fade-zoom-in"
				data-aos-easing="ease-in-back"
				data-aos-delay="100"
				data-aos-offset="0">
				What can we do for you?
			</div>
			<div class="columns is-centered">
				<div
					class="column is-centered">
					<Card/>
				</div>
				<div class="column is-centered">
					<Card title="Build intelligent systems" />
				</div>
				<div class="column is-centered">
					<Card title="Design and develop software" />
				</div>
			</div>
		</div>
	</section>
</template>

<script>
import Card from '~/components/Card'

export default {
	name: 'WhatWeDo',
	components: {
		Card
	}
}
</script>

<style>

</style>
