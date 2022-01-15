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
### 1. Building for the web
```bash
gulp
```

### 2. Building as a NodeJS library
```bash
gulp target-node
```

## Documentation
Documentation is included as comments on each appropriate method and class declaration. Eventually, usage documentation will be written and published here.

### Useful Reading
* [TypeScript handbook](https://www.typescriptlang.org/docs/handbook/intro.html)
* [Specification for serialization & RDF JSON](https://www.w3.org/TR/rdf-json/#section-serialization)
* [W3 Annotation Specification](https://www.w3.org/TR/annotation-model)

## Contributing/Developer Notes
See weekly issue in [issues](https://github.com/DigitalPiranesiStorage/Manifest-Generator/issues) for the checklist of the week.

If you have any suggestions or contributions to make, please do! Here is a simplified list of how to do this in Git:

1. Fork the Project
2. Create your Feature Branch (git checkout -b YourFeatureName)
3. Commit your Changes (git commit -m 'Add some FeatureName')
4. Push to the Branch (git push origin YourFeatureName)
5. Open a Pull Request

If there are any issues creating branches or pushing to the repository, please open an [issue](https://github.com/DigitalPiranesiStorage/Manifest-Generator/issues).
