# Introduction

This project aims to provide a IIIF Presentation API wrapper for JavaScript and
Typescript projects. When working with IIIF Presentation API Manifests, there
are various nuances and techniques that must be carefully deployed.
Unfortunately, these are not always easy to understand and link together.
Additionally, large-scale implementations of and usages of the IIIF Presentation
API will likely require the use of an automated, batchable, programatic approach
to manifest authoring.

The IIIF Presentation API Manifest Generator Library aims to fill this need
by providing easy-to-use implementations of JavaScript classes. This allows
for a level of abstraction over the actual document structure and allows for
developers to use their own approaches and implement the library into existing
projects.

The library offers easy-to-use classes, with methods and properties that
represent the various utilities that the IIIF Presentation API implements.
Since JavaScript can easily be serialized into JSON strings, much of the
library offers this functionality without any additional methodology.
Where this cannot be accomplished, or where the IIIF Presentation API
describes unique format/structuring, the library provides simple methods
for stringifying these objects.

## Core Concepts
### Document Structure
In the IIIF Presentation API, the manifest document contains various objects
and structures that represent the various ways that individual characteristics
ought to be displayed and how additional descriptions of data ought to be
included into the renderer.

For example, when considering a basic manifest, it will contain `@context`
property that describes the context of the manifest, a `type` property that
describes the type of the document, and many child elements such as `label`,
`items`, etc.

### Items
In IIIF Presentation API, many of the elements that can be attached to a
manifest contain child elements with their own structure, classified as _items_.
These items are stored in an array and are inherited as _children_ of their
parent. In this concept, it is useful to understand that nearly _every_ class
in the library is an `Item`, which can be attached to another `Item`'s child
item array.

For example, each manifest contains children _items_, which are typically
`AnnotationPages`, each of which contain child _items_ of the `Annotation` type.

### Attachment
As discussed in the Items section, each object of type `Item` can be attached
to another `Item` in it's child `items` array. This is done via attachement.
When an item is attached to another item or to a manifest, the parent item
handles all of the necessary processing of fields, data, and re-structuring
that may be required for that item.

This allows complicated and differently-structured items to be easily added
to one-another without the programmer needing to know about the specifics of
its properties.

Just as items can be attached, they can be dettached and clean-up/
restructuring is handled by the parent/child relationship.
