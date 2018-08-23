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
				<div
					@click="show(showJakubCDescriptionMobile, showJakubCDescription)"
					class="column is-centered">
					<MemberCard
						:name="'Jakub Cwynar'"
						:title="'Awesome Data Scientist and Developer'"
						:icon-prefix="'fas'"
						:icon-suffix="'fa-user-ninja'"/>
					<b-collapse :open.sync="isJakubCDescriptionOpenMobile">
						<div class="column is-absolutely-centered service-card-description is-size-5 main-color">
							Machine Learning developer, data scientist, half man half python.
						</div>
					</b-collapse>
				</div>
				<div
					@click="show(showPiotrDescriptionMobile, showPiotrDescription)"
					class="column is-centered">
					<MemberCard
						:name="'Piotr Grzybowski'"
						:title="'Awesome Data Scientist and Developer'"
						:icon-prefix="'fas'"
						:icon-suffix="'fa-user-tie'"/>
					<b-collapse :open.sync="isPiotrDescriptionOpenMobile">
						<div class="column is-absolutely-centered service-card-description is-size-5 main-color">
							Machine Learning developer, responsible for all Artificial Intelligence things.
						</div>
					</b-collapse>
				</div>
				<div
					@click="show(showEwaDescriptionMobile, showEwaDescription)"
					class="column is-centered">
					<MemberCard
						:name="'Ewa Juralewicz'"
						:title="'Awesome Data Scientist and Developer'"
						:icon-prefix="'fas'"
						:icon-suffix="'fa-user-secret'"/>
					<b-collapse :open.sync="isEwaDescriptionOpenMobile">
						<div class="column is-absolutely-centered service-card-description is-size-5 main-color">
							Investigates data like an secret agent and develops great systems.
						</div>
					</b-collapse>
				</div>
				<div
					@click="show(showJedrzejDescriptionMobile, showJedrzejDescription)"
					class="column is-centered">
					<MemberCard
						:name="'Jędrzej Maczan'"
						:title="'Makes things look beautiful'"
						:icon-prefix="'fas'"
						:icon-suffix="'fa-palette'"/>
					<b-collapse :open.sync="isJedrzejDescriptionOpenMobile">
						<div class="column is-absolutely-centered service-card-description is-size-5 main-color">
							Frontend developer, responsible for visual aspect of projects.
						</div>
					</b-collapse>
				</div>
				<div
					@click="show(showJakubMDescriptionMobile, showJakubMDescription)"
					class="column is-centered">
					<MemberCard
						:name="'Jakub Michałowski'"
						:title="'Awesome Data Scientist and Developer'"
						:icon-prefix="'fas'"
						:icon-suffix="'fa-user-astronaut'" />
					<b-collapse :open.sync="isJakubMDescriptionOpenMobile">
						<div class="column is-absolutely-centered service-card-description is-size-5 main-color">
							Machine Learning developer, data scientist, half man half python.
						</div>
					</b-collapse>
				</div>
				<!-- fas fa-user-ninja fas fa-user-graduate fas fa-user-secret fas fa-user-astronaut fas fa-user-tie -->
			</div>
			<b-collapse :open.sync="isJedrzejDescriptionOpen">
				<div class="column is-absolutely-centered service-card-description is-size-5 main-color">
					Frontend developer, responsible for visual aspect of projects.
				</div>
			</b-collapse>
			<b-collapse :open.sync="isPiotrDescriptionOpen">
				<div class="column is-absolutely-centered service-card-description is-size-5 main-color">
					Machine Learning developer, responsible for all Artificial Intelligence things.
				</div>
			</b-collapse>
			<b-collapse :open.sync="isEwaDescriptionOpen">
				<div class="column is-absolutely-centered service-card-description is-size-5 main-color">
					Investigates data like an secret agent and develops great systems.
				</div>
			</b-collapse>
			<b-collapse :open.sync="isJakubMDescriptionOpen">
				<div class="column is-absolutely-centered service-card-description is-size-5 main-color">
					Machine Learning developer, data scientist, half man half python.
				</div>
			</b-collapse>
			<b-collapse :open.sync="isJakubCDescriptionOpen">
				<div class="column is-absolutely-centered service-card-description is-size-5 main-color">
					Machine Learning developer, data scientist, half man half python.
				</div>
			</b-collapse>
		</div>
	</section>
</template>

<script>
import MemberCard from '~/components/MemberCard'

export default {
	name: 'MeetUs',
	components: {
		MemberCard
	},
	data () {
		return {
			isJedrzejDescriptionOpen: false,
			isJedrzejDescriptionOpenMobile: false,
			isPiotrDescriptionOpen: false,
			isPiotrDescriptionOpenMobile: false,
			isEwaDescriptionOpen: false,
			isEwaDescriptionOpenMobile: false,
			isJakubMDescriptionOpen: false,
			isJakubMDescriptionOpenMobile: false,
			isJakubCDescriptionOpen: false,
			isJakubCDescriptionOpenMobile: false,
			mobileBreakpoint: 768
		}
	},
	methods: {
		showJedrzejDescription () {
			this.isPiotrDescriptionOpen = false
			this.isEwaDescriptionOpen = false
			this.isJakubMDescriptionOpen = false
			this.isJakubCDescriptionOpen = false
			setTimeout(() => { this.isJedrzejDescriptionOpen = !this.isJedrzejDescriptionOpen }, 150)
		},
		showPiotrDescription () {
			this.isJedrzejDescriptionOpen = false
			this.isEwaDescriptionOpen = false
			this.isJakubMDescriptionOpen = false
			this.isJakubCDescriptionOpen = false
			setTimeout(() => { this.isPiotrDescriptionOpen = !this.isPiotrDescriptionOpen }, 150)
		},
		showEwaDescription () {
			this.isJedrzejDescriptionOpen = false
			this.isPiotrDescriptionOpen = false
			this.isJakubMDescriptionOpen = false
			this.isJakubCDescriptionOpen = false
			setTimeout(() => { this.isEwaDescriptionOpen = !this.isEwaDescriptionOpen }, 150)
		},
		showJakubMDescription () {
			this.isJedrzejDescriptionOpen = false
			this.isPiotrDescriptionOpen = false
			this.isEwaDescriptionOpen = false
			this.isJakubCDescriptionOpen = false
			setTimeout(() => { this.isJakubMDescriptionOpen = !this.isJakubMDescriptionOpen }, 150)
		},
		showJakubCDescription () {
			this.isJedrzejDescriptionOpen = false
			this.isPiotrDescriptionOpen = false
			this.isEwaDescriptionOpen = false
			this.isJakubMDescriptionOpen = false
			setTimeout(() => { this.isJakubCDescriptionOpen = !this.isJakubCDescriptionOpen }, 150)
		},
		showJedrzejDescriptionMobile () {
			this.isPiotrDescriptionOpenMobile = false
			this.isEwaDescriptionOpenMobile = false
			this.isJakubMDescriptionOpenMobile = false
			this.isJakubCDescriptionOpenMobile = false
			setTimeout(() => { this.isJedrzejDescriptionOpenMobile = !this.isJedrzejDescriptionOpenMobile }, 150)
		},
		showPiotrDescriptionMobile () {
			this.isJedrzejDescriptionOpenMobile = false
			this.isEwaDescriptionOpenMobile = false
			this.isJakubMDescriptionOpenMobile = false
			this.isJakubCDescriptionOpenMobile = false
			setTimeout(() => { this.isPiotrDescriptionOpenMobile = !this.isPiotrDescriptionOpenMobile }, 150)
		},
		showEwaDescriptionMobile () {
			this.isJedrzejDescriptionOpenMobile = false
			this.isPiotrDescriptionOpenMobile = false
			this.isJakubMDescriptionOpenMobile = false
			this.isJakubCDescriptionOpenMobile = false
			setTimeout(() => { this.isEwaDescriptionOpenMobile = !this.isEwaDescriptionOpenMobile }, 150)
		},
		showJakubMDescriptionMobile () {
			this.isJedrzejDescriptionOpenMobile = false
			this.isPiotrDescriptionOpenMobile = false
			this.isEwaDescriptionOpenMobile = false
			this.isJakubCDescriptionOpenMobile = false
			setTimeout(() => { this.isJakubMDescriptionOpenMobile = !this.isJakubMDescriptionOpenMobile }, 150)
		},
		showJakubCDescriptionMobile () {
			this.isJedrzejDescriptionOpenMobile = false
			this.isPiotrDescriptionOpenMobile = false
			this.isEwaDescriptionOpenMobile = false
			this.isJakubMDescriptionOpenMobile = false
			setTimeout(() => { this.isJakubCDescriptionOpenMobile = !this.isJakubCDescriptionOpenMobile }, 150)
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
