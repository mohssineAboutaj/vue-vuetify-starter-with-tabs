# Vue Vuetify Starter With VueRouter & Vuetify Tabs

- [Vue Vuetify Starter With VueRouter & Vuetify Tabs](#vue-vuetify-starter-with-vuerouter--vuetify-tabs)
  - [About](#about)
  - [Demo](#demo)
  - [Configuration](#configuration)
  - [Features](#features)
  - [Project setup](#project-setup)
    - [Compiles and hot-reloads for development](#compiles-and-hot-reloads-for-development)
    - [Compiles and minifies for production](#compiles-and-minifies-for-production)
    - [Lints and fixes files](#lints-and-fixes-files)
    - [Customize configuration](#customize-configuration)
  - [License](#license)

## About

A [Vuejs](http://vuejs.org/) & [Vuetify](http://vuetifyjs.com/) starter app with tabs, [VueRouter](https://router.vuejs.org/), [FontAwesome 5](https://fontawesome.com/) icons built using [Vue CLI](https://cli.vuejs.org/)

## Demo

- [Live Demo](https://vue-vuetify-starter-with-tabs.netlify.app/)

_Note_: it deosn't have [Vuex](https://vuex.vuejs.org/), if you want it you can install it

## Configuration

- The `./src/config.js` contains all variables like title & links (for routing)
- Default language in _English_ if you wanna use other lang you need to change html attribute in `./public/index.html` & the import line in `./src/plugins/vuetify.js` wish is like

```js
import en from 'vuetify/es5/locale/en'
...
export default new Vuetify({
	...
	lang: {
		locales: { en },
		current: 'en'
	},
	...
});

```

- Scss/Sass pre-proccessor support
- You can add any plugin by following [this way](https://vuejs.org/v2/guide/plugins.html) or as you want

## Features

- Built in navbar
- Vue Router
- Appbar/Navbar & Footer mixins to easy configuration
- Sidebar navigation
- Dark mode them swither
- [FontAwesome 5](https://fontawesome.com/) icons integration
- PWA (Progressive Web App) integration

## Project setup

```
yarn install
```

### Compiles and hot-reloads for development

```
yarn serve
```

### Compiles and minifies for production

```
yarn build
```

### Lints and fixes files

```
yarn lint
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).

## License

MIT
