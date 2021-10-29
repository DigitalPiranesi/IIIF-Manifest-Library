# Manifest Generator

[![Master Branch](https://github.com/DigitalPiranesiStorage/Manifest-Generator/actions/workflows/build-master-using-gulp.yml/badge.svg?branch=master)](https://github.com/DigitalPiranesiStorage/Manifest-Generator/actions/workflows/build-master-using-gulp.yml)

## Installing
Requirements:
* [NodeJS](https://nodejs.org/en/)
* Packages included via ```package.json``` (installed below).

All dependencies are managed by NPM and can be installed with the following
command:

```bash
npm install
```

## Building
After installing the dependencies, simply run the following command to build the application.
Building is managed by Gulp which runs all the necessary tasks. The resulting
build can be found in the ```dist``` folder.

```bash
gulp
```

## Running
The application can be run with:

```bash
node dist/main.js
```

## Documentation
See [```docs```](./docs) directory for extensive documentation.

## Contributing/Developer Notes
See weekly issue in [issues](https://github.com/DigitalPiranesiStorage/Manifest-Generator/issues) for the checklist of the week.

### Notes on Libraries
This software uses [NodeJS](https://www.nodejs.org) and [TypeScript](https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html), both of which are free and open-source. While other languages may be used, it is suggested to at least be familiar with vanilla Javascript and Typescript, as well as the NodeJS built-in libraries.
