# `ItemAnnotationPage`
## **Extends:** [Item](/class_item)

Note: This class refers to annotations as they would be included in the annotations
section of the manifest, not [W3 Web Annotations](/class_itemwebannotation)

## Fields
* See [Item](/class_item)
* `type` - `string` - readonly: Declares this object as an `AnnotationPage`. Cannot be modified.

## Constructors
#### `constructor(id: string)`

**Param `id`:** The unique URI for this item. This does not have to resolve in an HTTP request, but it _must_ be unique to the item. It is advised that you follow a standard scheme to avoid collisions. Note that if a collision occurs, the IIIF Presentation renderer may not display content.
