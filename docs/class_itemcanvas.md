# `ItemCanvas`
## **Extends:** [Item](/class_item)

## Fields
* See [Item](/class_item)
* `type` - `string` - readonly: Declares this object as an `Canvas`. Cannot be modified.
* `width` - `number` - readonly: Defines the width of the canvas. Once set it
cannot be modified.
* `height` - `number` - readonly: Defines the height of the canvas. Once set it cannot be modified.
* `annotations` - `ItemAnnotationPage[]` - The annotation pages associated with
this canvas. *Note: These are NOT W3 Web Annotations.*

## Constructors
#### `constructor(id: string, width: number, height: number)`

**Param `id`:** The unique URI for this item. This does not have to resolve in
an HTTP request, but it _must_ be unique to the item. It is advised that you
follow a standard scheme to avoid collisions. Note that if a collision occurs,
the IIIF Presentation renderer may not display content.

**Param `width`:** The width of the canvas in pixels.

**Param `height:`** The height of the canvas in pixels.

## Methods

#### `addAnnotationPage(page: ItemAnnotationPage)`
Adds an annotation page to the canvas. Note that these are IIIF Presentation Annotations, not W3 Web Annotations.

**Param `page`:** The page of annotations to add to the canvas.

#### `getWebAnnotationPages()`
**Return:** The W3 Web Annotation Pages attached to this canvas

#### `getAnnotationPages()`
**Return:** The annotation pages attaches to this canvas.
