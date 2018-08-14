<template>
	<nav class="navbar is-fullwidth is-mobile container">
		<div class="navbar-brand">
			<a class="navbar-item">
				Ramojady
				<!-- <img
					src="~/assets/images/logo.png"
					alt="Ramojady"> -->
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
	</nav>
</template>

<script>
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
	}
}
</script>

<style>
</style>
