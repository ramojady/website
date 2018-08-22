<template>
	<nav class="navbar is-fullwidth is-mobile is-fixed-top">
		<div class="container">
			<div
				class="navbar-brand">
				<a
					class="navbar-item">
					<img
						src="~/assets/images/logo.png"
						alt="Ramojady"
						class="logo"
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
						href="#">
						Blog
					</a>
					<a
						class="navbar-item"
						href="#">
						Services
					</a>
					<a
						class="navbar-item"
						href="#">
						Portfolio
					</a>
					<a
						class="navbar-item"
						href="#">
						Team
					</a>
					<a
						class="navbar-item"
						href="#">
						Contact
					</a>
				</div>
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
