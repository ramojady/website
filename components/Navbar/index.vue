<template>
	<nav class="navbar is-fullwidth is-mobile container">
		<div
			class="navbar-brand"
			data-aos="fade-right"
			data-aos-offset="300"
			data-aos-easing="ease-in-sine">
			<a class="navbar-item">
				<img
					src="~/assets/images/logo.png"
					alt="Ramojady"
				>
			</a>
			<div
				class="navbar-burger burger"
				data-target="navbarData"
				@click="toggleMenu()">
				<span/>
				<span/>
				<span/>
			</div>
		</div>

		<div
			id="navbarData"
			class="navbar-menu"
			:class="isActive ? 'is-active' : ''"
		>
			<div class="navbar-end has-text-white">
				<a
					class="navbar-item"
					href="#"
					data-aos="fade-down"
					data-aos-easing="linear"
					data-aos-duration="1">
					Blog
				</a>
				<a
					class="navbar-item"
					href="#"
					data-aos="fade-down"
					data-aos-easing="linear"
					data-aos-delay="50"
					data-aos-duration="1">
					Services
				</a>
				<a
					class="navbar-item"
					href="#"
					data-aos="fade-down"
					data-aos-easing="linear"
					data-aos-delay="100"
					data-aos-duration="1">
					Portfolio
				</a>
				<a
					class="navbar-item"
					href="#"
					data-aos="fade-down"
					data-aos-easing="linear"
					data-aos-delay="150"
					data-aos-duration="1">
					Team
				</a>
				<a
					class="navbar-item"
					href="#"
					data-aos="fade-down"
					data-aos-easing="linear"
					data-aos-delay="200"
					data-aos-duration="1">
					Contact
				</a>
			</div>
		</div>
	</nav>
</template>

<script>
import 'aos/dist/aos.css'

export default {
	name: 'Navbar',
	data () {
		return {
			isActive: false
		}
	},
	methods: {
		toggleMenu () {
			this.isActive = !this.isActive
		}
	},
	async mounted () {
		const AOS = await import('aos')
		AOS.init()
	}
}
</script>

<style>
</style>
