# nuxt-gottani-template

> My stellar Nuxt.js project

## Features
- Initial Options (`npx create-nuxt-app nuxt-gottani-template`)
  - ```
    ? Project name nuxt-gottani-template
    ? Project description My perfect Nuxt.js project
    ? Author name redshoga
    ? Choose the package manager Yarn
    ? Choose UI framework None
    ? Choose custom server framework None (Recommended)
    ? Choose Nuxt.js modules Axios
    ? Choose linting tools Prettier
    ? Choose test framework Jest
    ? Choose rendering mode Single Page App
    ```
- [Normalize.css](https://necolas.github.io/normalize.css/)
- Atomic Design Directory Structure
  - `~/components/...`
- SCSS Support
  - `node-sass`, `sass-loader`
- Nuxt Style Resources
  - Share variables, mixins, functions across all style files (no @import needed)
  - [`@nuxtjs/style-resources`](https://github.com/nuxt-community/style-resources-module)
- VSCode Settings
- VSCode Debugging
  - https://qiita.com/keiichi-hikita/items/e4b788a1d39aa88b46e3

## Recommend VSCode Extensions

- [Vetur](https://marketplace.visualstudio.com/items?itemName=octref.vetur)
- [Path Autocomplete](https://marketplace.visualstudio.com/items?itemName=ionutvmi.path-autocomplete)
- [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
- [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
- [Debugger for Chrome](https://marketplace.visualstudio.com/items?itemName=msjsdiag.debugger-for-chrome)

## TODO
- [ ] https://qiita.com/potato4d/items/5e267b828cfaba2ac960
- [ ] https://github.com/prettier/eslint-plugin-prettier/issues/114

## Build Setup

``` bash
# install dependencies
$ npm run install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm run start

# generate static project
$ npm run generate
```

For detailed explanation on how things work, checkout [Nuxt.js docs](https://nuxtjs.org).
