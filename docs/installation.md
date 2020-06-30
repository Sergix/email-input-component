# Installation

## Direct Download / CDN

https://unpkg.com/vue-email-input/dist/vue-email-input 

[unpkg.com](https://unpkg.com) provides NPM-based CDN links. The above link will always point to the latest release on NPM. You can also use a specific version/tag via URLs like https://unpkg.com/vue-email-input@{{ $version }}/dist/vue-email-input.js
 
Include vue-email-input after Vue and it will install itself automatically:

```html
<script src="https://unpkg.com/vue/dist/vue.js"></script>
<script src="https://unpkg.com/vue-email-input/dist/vue-email-input.js"></script>
```

## NPM

```sh
$ npm install vue-email-input
```

## Yarn

```sh
$ yarn add vue-email-input
```

When used with a module system, you must explicitly install the `vue-email-input` via `Vue.use()`:

```javascript
import Vue from 'vue'
import vue-email-input from 'vue-email-input'

Vue.use(vue-email-input)
```

You don't need to do this when using global script tags.

## Dev Build

You will have to clone directly from GitHub and build `vue-email-input` yourself if
you want to use the latest dev build.

```sh
$ git clone https://github.com//vue-email-input.git node_modules/vue-email-input
$ cd node_modules/vue-email-input
$ npm install
$ npm run build
```

