const pkg = require('./package')

module.exports = {
	mode: 'universal',

	/*
	** Headers of the page
	*/
	head: {
		title: pkg.name,
		meta: [
			{ charset: 'utf-8' },
			{
				name: 'viewport',
				content: 'width=device-width, initial-scale=1'
			},
			{
				hid: 'description',
				name: 'description',
				content: pkg.description
			}
		],
		link: [
			{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
			{
				rel: 'stylesheet',
				href: // fonts
					'https://fonts.googleapis.com/css?family=Montserrat:400,500,600,700,800'
			}
		]
	},

	/*
	** Customize the progress-bar color
	*/
	loading: { color: '#FFFFFF' },

	/*
	** Global CSS
	*/
	css: ['@/assets/scss/main.scss'],

	/*
	** Plugins to load before mounting the App
	*/
	plugins: [
	],

	/*
	** Nuxt.js modules
	*/
	modules: [
		// Doc: https://github.com/nuxt-community/dotenv-module
		'@nuxtjs/dotenv',
		// Doc: https://github.com/nuxt-community/axios-module#usage
		'@nuxtjs/axios',
		// Doc: https://buefy.github.io/#/documentation
		'nuxt-buefy',
		// Doc: https://www.npmjs.com/package/nuxt-fontawesome
		'nuxt-fontawesome'
	],
	/*
	** Axios module configuration
	*/
	axios: {
		// See https://github.com/nuxt-community/axios-module#options
	},
	fontawesome: {
		imports: [
			{
				set: '@fortawesome/free-regular-svg-icons',
				icons: ['far']
			},
			{
				set: '@fortawesome/free-solid-svg-icons',
				icons: ['fas']
			}
		]
	},
	/*
	** Build configuration
	*/
	build: {
		/*
		** You can extend webpack config here
		*/
		extend (config, ctx) {
			// Run ESLint on save
			if (ctx.isDev && ctx.isClient) {
				config.module.rules.push({
					enforce: 'pre',
					test: /\.(js|vue)$/,
					loader: 'eslint-loader',
					exclude: /(node_modules)/
				})
			}
		}
	}
}
