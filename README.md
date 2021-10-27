# Manifest Generator

[![Build Status](https://github.com/DigitalPiranesiStorage/Manifest-Generator/actions/workflows/build-master-using-gulp.yml/badge.svg?branch=master)](https://github.com/DigitalPiranesiStorage/Manifest-Generator/actions/workflows/build-master-using-gulp.yml)

## Installing
Requirements:
* [NodeJS](https://nodejs.org/en/)
* Packages included via ```package.json``` (installed below).

All dependencies are managed by NPM and can be installed with the following
command:

```bash
npm install
```

<!--
## Running

### 1. (Optional) Select Context
Each manifest generated follows a context of the IIIF specification. The
generator defaults to the latest stable version of the specification, but other
versions can be specified using the context flag (see below). This step is
optional.

## Command Line Options

| Flag                    | Description                                                                                                       |
| ----------------------- | ----------------------------------------------------------------------------------------------------------------- |
| ```-c, --context```     | Change the IIIF context for the manifest. ```VERSION_NUMBER``` must be installed in the ```contexts``` directory. |
| ```-h, --help```        | Display command line options, flags, and arguments.                                                               |
| ```-v, --version```     | Display version information.                                                                                      |
-->

## Contributing/Developer Notes

### Notes on Libraries

This software uses [NodeJS](https://www.nodejs.org) and [TypeScript](https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html), both of which are free and open-source. While other languages may be used, it is suggested to at least be familiar with vanilla Javascript and Typescript, as well as the NodeJS built-in libraries.
