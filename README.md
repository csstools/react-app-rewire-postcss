# React App Rewire PostCSS [<img src="https://postcss.github.io/postcss/logo.svg" alt="PostCSS Logo" width="90" height="90" align="right">][postcss]

[![NPM Version][npm-img]][npm-url]
[![Build Status][cli-img]][cli-url]
[![Support Chat][git-img]][git-url]

[React App Rewire PostCSS] lets you configure [PostCSS] in [Create React App]
v1 and v2 without ejecting.

## Usage

Add [React App Rewire PostCSS] to your [Rewired] React app:

```bash
npm install react-app-rewire-postcss --save-dev
```

Next, add [React App Rewire PostCSS] to `config-overrides.js` in your React app
directory:

```js
module.exports = config => {
  require('react-app-rewire-postcss')(config/*, options */);

  return config;
};
```

That’s it! Now you can control PostCSS with all the configuration options from
[PostCSS Loader]:

```js
module.exports = config => {
  require('react-app-rewire-postcss')(config, {
     plugins: loader => [
      require('postcss-preset-env')()
    ]
  });

  return config;
};
```

Alternatively, you can now use `postcss.config.js` in your React app directory:

```js
module.exports = config => {
  require('react-app-rewire-postcss')(config, true /* any truthy value will do */);

  return config;
};
```

```js
module.exports = {
  plugins: {
    'postcss-preset-env': {
      stage: 0
    }
  }
};
```

And you can leverage [Browserslist] by adding a `.browserslistrc` to your React
app directory:

<img src="https://pbs.twimg.com/profile_images/875021827495665665/-N99XiJV_200x200.jpg" alt="" align="right" height="108">

```yaml
# browsers we support

> 2%
not dead
```

---

Happy PostCSS’ing!

[cli-img]: https://img.shields.io/travis/csstools/react-app-rewire-postcss.svg
[cli-url]: https://travis-ci.org/csstools/react-app-rewire-postcss
[git-img]: https://img.shields.io/badge/support-chat-blue.svg
[git-url]: https://gitter.im/postcss/postcss
[npm-img]: https://img.shields.io/npm/v/react-app-rewire-postcss.svg
[npm-url]: https://www.npmjs.com/package/react-app-rewire-postcss

[Browserslist]: https://github.com/browserslist/browserslist
[Create React App]: https://github.com/facebook/create-react-app
[Gulp PostCSS]: https://github.com/postcss/gulp-postcss
[Grunt PostCSS]: https://github.com/nDmitry/grunt-postcss
[PostCSS]: https://github.com/postcss/postcss
[PostCSS Loader]: https://github.com/postcss/postcss-loader
[React App Rewire PostCSS]: https://github.com/csstools/react-app-rewire-postcss
[React App Rewired]: https://github.com/timarney/react-app-rewired
[rewired]: https://github.com/timarney/react-app-rewired#how-to-rewire-your-create-react-app-project
