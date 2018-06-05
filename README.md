# React App Rewire PostCSS [<img src="https://postcss.github.io/postcss/logo.svg" alt="PostCSS Logo" width="90" height="90" align="right">][postcss]

[![NPM Version][npm-img]][npm-url]
[![Build Status][cli-img]][cli-url]
[![Support Chat][git-img]][git-url]

[React App Rewire PostCSS] lets you configure PostCSS plugins in
[Create React App] without ejecting.

## Usage

Add [React App Rewired] and [React App Rewire PostCSS] to your React app:

```bash
npm install react-app-rewired react-app-rewire-postcss --save-dev
```

Add [React App Rewire PostCSS] to the `config-overrides.js` file in your React
app directory:

```js
/* config-overrides.js */

const { rewirePostCss } = require('react-app-rewire-postcss');

module.exports = function override(config, env) {
  //do stuff with the webpack config...
  return rewirePostCss(config /*, options */);
}
```

Now you can control PostCSS with the configuration options in [PostCSS Loader]:

```js
/* config-overrides.js */

const { rewirePostCss } = require('react-app-rewire-postcss');

module.exports = function override(config, env) {
  //do stuff with the webpack config...
  return rewirePostCss(config, {
     plugins: loader => [
      require('postcss-preset-env')()
    ]
  });
}
```

You can also use `postcss.config.js` in your React app directory:

```js
module.exports = {
  plugins: {
    'postcss-preset-env': { stage: 0 }
  }
};
```

And you can also use `.browserslistrc` in your React app directory:

```rc
> 2%
not dead
```

Happy PostCSS’ing!

[cli-img]: https://img.shields.io/travis/jonathantneal/react-app-rewire-postcss.svg
[cli-url]: https://travis-ci.org/jonathantneal/react-app-rewire-postcss
[git-img]: https://img.shields.io/badge/support-chat-blue.svg
[git-url]: https://gitter.im/postcss/postcss
[npm-img]: https://img.shields.io/npm/v/react-app-rewire-postcss.svg
[npm-url]: https://www.npmjs.com/package/react-app-rewire-postcss

[Create React App]: https://github.com/facebook/create-react-app
[Gulp PostCSS]: https://github.com/postcss/gulp-postcss
[Grunt PostCSS]: https://github.com/nDmitry/grunt-postcss
[PostCSS]: https://github.com/postcss/postcss
[PostCSS Loader]: https://github.com/postcss/postcss-loader
[React App Rewire PostCSS]: https://github.com/jonathantneal/react-app-rewire-postcss
[React App Rewired]: https://github.com/timarney/react-app-rewired
