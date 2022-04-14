# `ItemAnnotation` (abstract)
## **Extends:** [Item](/class_item), **Implements:** [IJSONAble](/interface_ijsonable)

Note: This class refers to annotations as they would be included in the annotations
section of the manifest, not [W3 Web Annotations](/class_itemwebannotation)

## Fields
* See [Item](/class_item)
* `motivation` - `EnumAnnotationMotivation`: The motivation for this annotation
* `body` - `any` - abstract: The body of the annotation
* `target` - `string` or `undefined`: The target for the annotation

## Constructors
#### `constructor(id: string, motivation: EnumAnnotationMotivation, target?: string)`

**Param `id`:** The unique URI for this item. This does not have to resolve in an HTTP request, but it _must_ be unique to the item. It is advised that you follow a standard scheme to avoid collisions. Note that if a collision occurs, the IIIF Presentation renderer may not display content.

**Param `motivation`:** The motivation for this annotation. Valid options are `commenting`, `painting`, and `suggesting`.

**Param `target`:** Optional string representing the target of the annotation.

## Methods
#### `addContext(context: string)`
Adds a new context to the item. If there is no existing context, it initializes
the context field. If there is, it converts the context field to an array and
appends the value to it.

**Param `context`:** The context to add to this item. This must resolve in an HTTP request. An example is the presentation API [context.json](http://iiif.io/api/presentation/3/context.json).

#### `setTarget(target: string)`
Sets the target of this annotation. A target is a specially formatted string that
determines how a specific annotation will be displayed onto a canvas.

**Param: `target`:** A target-formatted string

#### `getTarget()`
**Return:** The target for this annotation or null if it has not been set.

#### `setBody(body: any)`
Set the body of the annotation. Annotations may have varying structures and body
types, which allows them to be abstractly represented in a single class. This
can be implemented in any format the annotation may require. Specific annotation
types may override this functionality and enforce a standard (e.g.
`ItemTextualAnnotation` class).

**Param `body`:** The body of the annotation. This can be a single object, or
data formatted in any way that is appropriate for the annotation type.

#### `getBody()`
**Return:** The body of the annotation as it may be, or `undefined` if it does
not exist.
