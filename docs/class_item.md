# `Item` (abstract)
## **Implements:** [IItem](/interface_iitem), [IJSONAble](/interface_ijsonable)

## Fields
* `@context` - `string` or `string[]`: The context for this item
* `id` - `string` - readonly: The URI for the item. Once set it cannot be modified.
* `items` - `Item[]`: Child items for this item. This can be empty, in which case the item does not have any children.
* `motivation` - `string` - optional: Motivation property, not required for all items but available for all.
* `type` - `string` - abstract, readonly: The IIIF type for the item. Once declared it cannot be modified.

## Constructors
#### `constructor(id: string, context: string | string[] | undefined)`

**Param `id`:** The unique URI for this item. This does not have to resolve in an HTTP request, but it _must_ be unique to the item. It is advised that you follow a standard scheme to avoid collisions. Note that if a collision occurs, the IIIF Presentation renderer may not display content.

**Param `context`:** The context for this item. This must resolve in an HTTP  request. An example is the presentation API [context.json](http://iiif.io/api/presentation/3/context.json).

## Methods
#### `addContext(context: string)`
Adds a new context to the item. If there is no existing context, it initializes
the context field. If there is, it converts the context field to an array and
appends the value to it.

**Param `context`:** The context to add to this item. This must resolve in an HTTP request. An example is the presentation API [context.json](http://iiif.io/api/presentation/3/context.json).

#### `addItem(item: Item)`
Adds a child item to this item. Note that this method does not check if it is
appropriate for the child to exist on this item as a child and blindly attaches
it.

**Param `item`:** An item to add as a child.

#### `getItems()`
Gets the array of child items for this item. Note that the actual array is
returned, so any mutation will be reflected in the contents.

**Return:** The array of child elements stored internally

#### `removeItem(item: Item)`
Removes an item if an item with the same `id` exists in the children. If it
cannot be found, a message is logged to the console.

**Param `item`:** The item to remove from the children

#### **Depreciated** `toJSONString()`
Converts the item into a JSON-formatted string.
**Note: This may be invalid.**
