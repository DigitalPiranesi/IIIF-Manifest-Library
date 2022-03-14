# <span id="1" Manifest Generator

[![Master Branch](https://github.com/DigitalPiranesiStorage/Manifest-Generator/actions/workflows/build-master-using-gulp.yml/badge.svg?branch=master)](https://github.com/DigitalPiranesiStorage/Manifest-Generator/actions/workflows/build-master-using-gulp.yml)

The Manifest Generator is a utility for generating IIIIF Presentation API
v3-compliant JSON manifests. These can be generated from existing RDF JSON-LD,
created in the command line, or created programatically.

The library was created to address the problem of translating from Scalar's RDF
JSON-LD format for use in IIIF Presentation API-compliant viewers such as
Mirador and Seadragon.

This software aims to be an easy-to-use library and command line tool that
can be used in both web applications and as a utility.

# <span id="3"></span> Building

## Installing Dependencies
[NodeJS and NPM](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm) must be installed on the system in order to use the package manager and automated dependency management.

```bash
npm install
```

## Usage & Targets
When building the manifest generator, there are various ways to build it. This includes building a web-compatible JavaScript library, a NodeJS package, and a command-line utility. By building the project with various flags, you can target those environments and exclude all other source that is unnecessary.

### NodeJS
TODO

### Web
To build the manfiest generator as a web-compatible JavaScript library, use the following commands.

```bash
$ npm install     # Installs dependencies for building the project
$ gulp clean      # Cleans the build environment and removes previously built code.
$ gulp target-web # Builds the project with the web library as the target.
```

The output in the `dist` folder can then be included into any Web project. The file `i3.build.js` can be included into any HTML file.

# Usage

## Web
