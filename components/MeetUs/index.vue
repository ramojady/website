<template>
	<section class="meet-us opposite-color">
		<div class="container">
			<div
				class="title-container title-font is-size-2 m-b-10"
				data-aos="fade-zoom-in"
				data-aos-easing="ease-in-back"
				data-aos-delay="200"
				data-aos-offset="0"
				data-aos-once="true">
				Meet us
			</div>
			<div
				class="columns is-centered m-t-100"
				data-aos="fade-up"
				data-aos-duration="1000"
				data-aos-once="true">
				<MemberCard
					:name="'Jędrzej Maczan'"
					:title="'Makes things look beautiful'"
					:icon-prefix="'fas'"
					:icon-suffix="'fa-palette'"
					:description="'Creative part of the Team'" />
			</div>
		</div>
	</section>
</template>

<script>
import MemberCard from '~/components/MemberCard'

export default {
	name: 'MeetUs',
	components: {
		MemberCard
	}
}
</script>

<style>

</style>
