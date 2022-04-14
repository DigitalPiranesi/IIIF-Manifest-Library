# `ItemTextualAnnotation`
## **Extends:** [ItemAnnotation](/class_itemannotation)

## Fields
* See [Item](/class_item)
* `body` - JavaScript object with the following format:
  * `type` - `string`: Type of annotation, defaults to `"TextualBody"`
  * `value` - `string`: Value of the annotation (message/text to display)
  * `language` - `string`: Two-character language code for the text.
  * `format` - `string`: MIME for the content, defaults to `"text/html"`

## Constructors
#### `constructor(id: string, motivation: EnumAnnotationMotivation, value: string, language: string, target?: string)`

**Param `id`:** The unique URI for this item. This does not have to resolve in
an HTTP request, but it _must_ be unique to the item. It is advised that you
follow a standard scheme to avoid collisions. Note that if a collision occurs,
the IIIF Presentation renderer may not display content.

**Param `motivation`:** Annotation's motivation. See [enum](/enum_enumannotationmotivation) for more.

**Param `value`:** The text to display.

**Param `language`:** Two character language code for the text of the annotation

**Param `target`:** Optional, specifies the target for the annotation

## Methods

#### `getBody`
**Return:** The body field of the annotation (direct value can be accessed via `getBody().value`)
