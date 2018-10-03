module.exports = config => require('react-app-rewire-postcss')(config, {
	plugins() {
		return [
			require('postcss-preset-env')({
				stage: 0
			})
		]
	}
});
