module.exports = {
	root: true,
	env: {
		browser: true,
		node: true
	},
	parserOptions: {
		parser: 'babel-eslint'
	},
	extends: [
		'standard',
		'plugin:vue/strongly-recommended'
	],
	plugins: ['html', 'vue'],
	settings: {
		'html/html-extensions': ['.html']
	},
	rules: {
		'no-tabs': 0,
		indent: ['error', 'tab'],
		'vue/require-v-for-key': 0,
		'vue/html-indent': [
			'error',
			'tab',
			{
				attribute: 1,
				closeBracket: 0,
				alignAttributesVertically: true,
				ignores: []
			}
		]
	},
	globals: {}
}
