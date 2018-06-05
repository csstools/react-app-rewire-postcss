export default (config, options) => {
	const postcssLoader = findRule(config.module.rules, postcssLoaderMatcher);

	postcssLoader.loader = require.resolve('postcss-loader');

	delete postcssLoader.options.plugins;

	Object.assign(postcssLoader.options, options);

	return config;
};

const findRule = (rulesSource, ruleMatcher) => {
	const { index, rules } = findIndexAndRules(rulesSource, ruleMatcher);

	return rules[index];
};

const findIndexAndRules = (rulesSource, ruleMatcher) => {
	let result;

	const rules = Array.isArray(rulesSource)
		? rulesSource
	: ruleChildren(rulesSource);

	rules.some(
		(rule, index) => {
			result = ruleMatcher(rule)
				? { index, rules }
			: findIndexAndRules(ruleChildren(rule), ruleMatcher)

			return result;
		}
	);

	return result;
};

const ruleChildren = loader => loader.use || loader.oneOf || Array.isArray(loader.loader) && loader.loader || [];

const postcssLoaderMatcher = rule => rule.loader && /\bpostcss-loader\b/.test(rule.loader);
