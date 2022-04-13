# Targets
## NodeJS
The library can be built and targeted for NodeJS environments where operations
such as file I/O, asynchronyous http-requests, and document manipulation is
patched for the environment. NodeJS environments are required to provide some
additional dependencies.

The NodeJS target is recommended for those who wish to incorporate the IIIF
Manifest API functionality into an existing NodeJS project. While a command
line functionality can be implemented, the web-distribution may offer similar,
and easier to use, interface.

```shell
# To build for NodeJS, run this in the project directory:
$ gulp target-node
```

## TypeScript Projects
The library was written in TypeScript to promote strict-typing and eliminate
class/inheritance based exceptions. The library can easily be integrated into
existing TypeScript projects with includes.

There is no additional build-pipeline for the TypeScript library.

## Web
When desigining the library, the main focus was usability on the web. This
principle was based on the goal of integrating the IIIF Presentation API
into a JavaScript project without the manual authoring of Manifests typically
required.

```shell
# To build for the web, run this in the project directory:
$ gulp target-web
```
