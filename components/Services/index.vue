<template>
	<div>
		<section class="services opposite-color">
			<div class="container">
				<div
					class="title-container title-font is-size-2 m-b-10"
					data-aos="fade-zoom-in"
					data-aos-easing="ease-in-back"
					data-aos-delay="200"
					data-aos-offset="0"
					data-aos-once="true">
					What can we do for you?
				</div>
				<div
					class="columns is-centered m-t-100"
					data-aos="fade-up"
					data-aos-duration="1000"
					data-aos-once="true">
					<div
						@click="show(showWebdevDescriptionMobile, showWebdevDescription)"
						class="column is-centered">
						<ServiceCard
							:title="'Create beautiful website'"
							:icon-prefix="'fas'"
							:icon-suffix="'fa-desktop'"/>
						<b-collapse :open.sync="isWebdevDescriptionOpenMobile">
							<div class="column is-absolutely-centered service-card-description is-size-5">
								Do you love Internet? So we do! Our experienced team of web developers is opened for new challenges.
							</div>
						</b-collapse>
					</div>
					<div
						@click="show(showDataScienceDescriptionMobile, showDataScienceDescription)"
						class="column is-centered">
						<ServiceCard
							:title="'Build intelligent systems'"
							:icon-prefix="'fas'"
							:icon-suffix="'fa-brain'"/>
						<b-collapse :open.sync="isDataScienceDescriptionOpenMobile">
							<div class="column is-absolutely-centered service-card-description is-size-5">
								Machine Learning, Deep Learning, Artificial Intelligence
							</div>
						</b-collapse>
					</div>
					<div
						@click="show(showSoftwareDevelopmentDescriptionMobile, showSoftwareDevelopmentDescription)"
						class="column is-centered">
						<ServiceCard
							:title="'Design and develop software'"
							:icon-prefix="'far'"
							:icon-suffix="'fa-keyboard'"/>
						<b-collapse :open.sync="isSoftwareDevelopmentDescriptionOpenMobile">
							<div class="column is-absolutely-centered service-card-description is-size-5">
								We create software on demand.
							</div>
						</b-collapse>
					</div>
				</div>
				<b-collapse :open.sync="isWebdevDescriptionOpen">
					<div class="column is-absolutely-centered service-card-description is-size-5">
						Do you love Internet? So we do! Our experienced team of web developers is opened for new challenges.
					</div>
				</b-collapse>
				<b-collapse :open.sync="isDataScienceDescriptionOpen">
					<div class="column is-absolutely-centered service-card-description is-size-5">
						Machine Learning, Deep Learning, Artificial Intelligence
					</div>
				</b-collapse>
				<b-collapse :open.sync="isSoftwareDevelopmentDescriptionOpen">
					<div class="column is-absolutely-centered service-card-description is-size-5">
						We create software on demand.
					</div>
				</b-collapse>
			</div>
		</section>
	</div>

</template>

<script>
import ServiceCard from '~/components/ServiceCard'

export default {
	name: 'Services',
	components: {
		ServiceCard
	},
	data () {
		return {
			isWebdevDescriptionOpen: false,
			isDataScienceDescriptionOpen: false,
			isSoftwareDevelopmentDescriptionOpen: false,
			isWebdevDescriptionOpenMobile: false,
			isDataScienceDescriptionOpenMobile: false,
			isSoftwareDevelopmentDescriptionOpenMobile: false,
			mobileBreakpoint: 768
		}
	},
	methods: {
		showWebdevDescription () {
			this.isDataScienceDescriptionOpen = false
			this.isSoftwareDevelopmentDescriptionOpen = false
			setTimeout(() => { this.isWebdevDescriptionOpen = !this.isWebdevDescriptionOpen }, 150)
		},
		showDataScienceDescription () {
			this.isWebdevDescriptionOpen = false
			this.isSoftwareDevelopmentDescriptionOpen = false
			setTimeout(() => { this.isDataScienceDescriptionOpen = !this.isDataScienceDescriptionOpen }, 150)
		},
		showSoftwareDevelopmentDescription () {
			this.isDataScienceDescriptionOpen = false
			this.isWebdevDescriptionOpen = false
			setTimeout(() => { this.isSoftwareDevelopmentDescriptionOpen = !this.isSoftwareDevelopmentDescriptionOpen }, 150)
		},
		showWebdevDescriptionMobile () {
			this.isDataScienceDescriptionOpenMobile = false
			this.isSoftwareDevelopmentDescriptionOpenMobile = false
			setTimeout(() => { this.isWebdevDescriptionOpenMobile = !this.isWebdevDescriptionOpenMobile }, 150)
		},
		showDataScienceDescriptionMobile () {
			this.isWebdevDescriptionOpenMobile = false
			this.isSoftwareDevelopmentDescriptionOpenMobile = false
			setTimeout(() => { this.isDataScienceDescriptionOpenMobile = !this.isDataScienceDescriptionOpenMobile }, 150)
		},
		showSoftwareDevelopmentDescriptionMobile () {
			this.isDataScienceDescriptionOpenMobile = false
			this.isWebdevDescriptionOpenMobile = false
			setTimeout(() => { this.isSoftwareDevelopmentDescriptionOpenMobile = !this.isSoftwareDevelopmentDescriptionOpenMobile }, 150)
		},
		show (callbackTrue, callbackFalse) {
			if (window.innerWidth <= this.mobileBreakpoint) {
				callbackTrue()
			} else {
				callbackFalse()
			}
		}
	}
}
</script>

<style>

</style>
