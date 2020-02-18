# Stylus [![Build Status][build]][build-link]
[build]: https://travis-ci.org/stylus/stylus-lang.com.png?branch=master
[build-link]: https://travis-ci.org/stylus/stylus-lang.com

This is a branch for the code running Stylus' site. It does not contain the docs, they're taken from the `dev` branch using the git submodule.

## Requirements
- [npm](https://www.npmjs.org/)
- [bundler](//bundler.io/)

## Running locally

Fetch node and ruby dependencies.
```bash
$ npm install
$ bundle install
```

Build the site
```bash
$ make build
```

Serve the site locally
```bash
$ make serve
```

Open [http://0.0.0.0:4000](http://0.0.0.0:4000) in your web browser.

## Thanks

Big thanks to [Nathan Vander Wilt](https://github.com/natevw) for sponsoring the domain costs. 🎉
