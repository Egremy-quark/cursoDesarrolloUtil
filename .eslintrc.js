module.exports = {
	env: {
		browser: true,
		es2021: true
	},
	settings: {
		react: {
			version: 'detect'
		}
	},
	extends: [
		'plugin:react/recommended',
		'plugin:react/jsx-runtime', // 'react/react-in-jsx-scope': 'off' // error || warning
		'standard',
		'eslint-config-prettier'
	],
	parserOptions: {
		ecmaFeatures: {
			jsx: true
		},
		ecmaVersion: 'latest',
		sourceType: 'module'
	},
	plugins: ['react'],
	rules: {
		// 'react/react-in-jsx-scope': 'off' // error || warning
	}
};
