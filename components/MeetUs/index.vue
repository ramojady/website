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
						:title="'The Handyman'"
						:icon-prefix="'fas'"
						:icon-suffix="'fa-user-ninja'"/>
					<b-collapse :open.sync="isJakubCDescriptionOpenMobile">
						<div class="column is-absolutely-centered service-card-description is-size-5 main-color">
							Started hacking when he was 5. Loves trains. Expert of the hipster part of YouTube. Theoretically a Data Scientist but when an issue pops out it turns out he knows the whole stack and has already seen it somewhere... Specializes in Machine Learning. Half man, half Python.
						</div>
					</b-collapse>
				</div>
				<div
					@click="show(showPiotrDescriptionMobile, showPiotrDescription)"
					class="column is-centered">
					<MemberCard
						:name="'Piotr Grzybowski'"
						:title="'The Alpha Brain'"
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
						:title="'The Undercover Artist'"
						:icon-prefix="'fas'"
						:icon-suffix="'fa-palette'"/>
					<b-collapse :open.sync="isJedrzejDescriptionOpenMobile">
						<div class="column is-absolutely-centered service-card-description is-size-5 main-color">
							Losing his dreadlocks uncovered the Artist beneath. He converted from backend to frontend overnight and rocked it. A Scout at heart, always watching and offering a shoulder to cry on. A pretty nice, strong shoulder.
						</div>
					</b-collapse>
				</div>
				<div
					@click="show(showJakubMDescriptionMobile, showJakubMDescription)"
					class="column is-centered">
					<MemberCard
						:name="'Jakub Michałowski'"
						:title="'The Joker'"
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
					Losing his dreadlocks uncovered the Artist beneath. He converted from backend to frontend overnight and rocked it. A Scout at heart, always watching and firing us up. Produces more code lines per minute than he bench presses and knows it like he knows his calories.
				</div>
			</b-collapse>
			<b-collapse :open.sync="isPiotrDescriptionOpen">
				<div class="column is-absolutely-centered service-card-description is-size-5 main-color">
					Could probably do better at being Andrew Ng than Andrew Ng, but he's not Asian. Reinforcement Learning aficionado. When you hear him say it's time to chill you might doubt your understanding of the word. The 'push or don't sleep' type. Can trek for 50 hours straight.
				</div>
			</b-collapse>
			<b-collapse :open.sync="isEwaDescriptionOpen">
				<div class="column is-absolutely-centered service-card-description is-size-5 main-color">
					Investigates data like an secret agent and develops great systems.
				</div>
			</b-collapse>
			<b-collapse :open.sync="isJakubMDescriptionOpen">
				<div class="column is-absolutely-centered service-card-description is-size-5 main-color">
					Transforms from a basement nerd into a top marketing specialist upon a haircut. Will make you sell your kidney for a penny. Both of them. With a smile on your face. In the Basement mode he's a Data Scientist with ideas as wild as his hair before the haircut.
				</div>
			</b-collapse>
			<b-collapse :open.sync="isJakubCDescriptionOpen">
				<div class="column is-absolutely-centered service-card-description is-size-5 main-color">
					Started hacking when he was 5. Loves trains. Expert of the hipster part of YouTube. Theoretically a Data Scientist but when an issue pops out it turns out he knows the whole stack and has already seen it. Specializes in Machine Learning. They say he's a half man, half Python. Haven't checked.
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
