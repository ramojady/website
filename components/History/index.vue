<template>
	<section class="main-color history">
		<div class="container">
			<div
				class="title-container title-font is-size-2 m-b-10"
				data-aos="fade-zoom-in"
				data-aos-easing="ease-in-back"
				data-aos-delay="200"
				data-aos-offset="0"
				data-aos-once="true">
				We write our own history
			</div>
			<div
				class="columns is-centered m-t-100"
				data-aos="fade-up"
				data-aos-duration="1000"
				data-aos-once="true">
				<Timeline />
			</div>
		</div>
	</section>
</template>

<script>
import Timeline from '~/components/Timeline'

export default {
	name: 'History',
	components: {
		Timeline
	}
}
</script>

<style>

</style>
