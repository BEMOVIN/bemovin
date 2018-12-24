# live-reload-vanilla-website-template

Starter template to build a website without a front-end framework but making use of Webpack to support writing modern JavaScript (ES6+), including ES Modules and Sass.

## Features

- Live reload in development
- Webpack
- Sass compilation (and minification/autoprefixing in production)
- ES6+ transpilation (and minification/uglyfication in production)
- ES Modules

## Usage

- Install dependencies

```
yarn
```

- Run development server

```
yarn dev
```

Will open your default browser to http://localhost:8080/public

Webpack will watch for changes in the `./src` directory and output the bundled assets to `./public/assets`. In parellel, the development server will watch for changes in the `./public` directory and live reload the browser.

- Build production bundles

```
yarn build
```

Will compile, minify and autoprefix Sass to CSS. Will Minify and uglify JavaScript and output the bundled assets to `./public/assets`.

After building for production you can take the `./public` directory and deploy it.

- Deploy to GitHub Pages

```
yarn deploy
```

It will call the `build` script and it will use gh-pages tool to deploy the `./public` folder to GitHub Pages.

## Tutorial

Visit my [blog entry](https://blog.bitsrc.io/build-a-website-with-modern-tooling-and-no-frameworks-a33e65099f9) where I go step-by-step on how to build this template from scratch.

## Giving Back

If you would like to support my work and the time I put in making tutorials, you can click the image below to get me a coffee. I would really appreciate it (but is not required).

[![Buy Me A Coffee](https://www.buymeacoffee.com/assets/img/custom_images/black_img.png)](https://www.buymeacoffee.com/esausilva)

-Esau Silva
