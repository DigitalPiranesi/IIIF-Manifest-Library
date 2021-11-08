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

## Testing
There are a few [tests](./test) built into the development lifestyle. These are automatically run on each push to the repository and you can see the output in the badge above. If you wish to test on your own, simply run:

```bash
npm test
```

## Documentation
Documentation is included as comments on each appropriate method and class declaration. Eventually, usage documentation will be written and published here.

### Useful Reading
* [TypeScript handbook](https://www.typescriptlang.org/docs/handbook/intro.html)
* [TypeScript type notation](https://www.tutorialsteacher.com/typescript/type-annotation)
* [TypeScript classes](https://www.typescriptlang.org/docs/handbook/2/classes.html)
  * [Abstract classes](https://www.tutorialsteacher.com/typescript/abstract-class)
  * [Interfaces](https://www.tutorialsteacher.com/typescript/typescript-interface)
* [TypeScript object types](https://www.typescriptlang.org/docs/handbook/2/objects.html)

## Contributing/Developer Notes
See weekly issue in [issues](https://github.com/DigitalPiranesiStorage/Manifest-Generator/issues) for the checklist of the week.

If you have any suggestions or contributions to make, please do! Here is a simplified list of how to do this in Git:

1. Fork the Project
2. Create your Feature Branch (git checkout -b YourFeatureName)
3. Commit your Changes (git commit -m 'Add some FeatureName')
4. Push to the Branch (git push origin YourFeatureName)
5. Open a Pull Request

If there are any issues creating branches or pushing to the repository, please open an [issue](https://github.com/DigitalPiranesiStorage/Manifest-Generator/issues).

### Notes on Libraries
This software uses [NodeJS](https://www.nodejs.org) and [TypeScript](https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html), both of which are free and open-source. While other languages may be used, it is suggested to at least be familiar with vanilla Javascript and Typescript, as well as the NodeJS built-in libraries.
