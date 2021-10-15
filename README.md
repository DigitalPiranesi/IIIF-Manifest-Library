# Manifest Generator

## Installing
Requirements:
* [NodeJS](https://nodejs.org/en/)

All dependencies are managed by NPM and can be installed with the following
command:

```bash
npm install
```

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
