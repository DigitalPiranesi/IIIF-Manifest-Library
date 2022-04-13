# Usage
## Manifest Lifecycle
### 1) Initialization
The manifest lifecycle begins with the creation of a manifest object, with
its initalization properties specified. From here, the object's methods and
accessors allows it to be manipulated and used, then converted to a JSON
string.

```javascript
/*
 * Constructor parameters:
 *   1) context version
 *   2) URI of the manifest
 */
var manifest = new I3.Manifest("3", "https://example.com/manifests/example1.json");
```

### 2) Fields
Following the initialization of the manifest object, one can manipulate the
various fields that the manifest has. For the manifest, this is the behavior
enum and the label.

```javascript
var label = new I3.Label("en", ["Hello, world!"]);
manifest.addLabel(label);
manifest.setBehavior("paged");
```


### 3) Attaching Items
Following the initialization of a manifest object, items can be attached to it.
This includes annotations, web annotations, and annotation pages. For example,
the below code creates a Canvas, to which a page of annotations is attached. A
single image (`image.jpeg`) is attached to that page. These are then layered and
attached to the manifest.

```javascript
// Creates a new canvas at "canvas/1" with width 100 and height 100
var canvas = new I3.ItemCanvas("canvas-1", 100, 100);
var page = new I3.ItemWebAnnotationPage("page-1");
var image = new I3.ItemWebAnnotationImage("image-1", "painting", canvas, "image.jpeg", 100, 100);

page.addItem(image); // Image is attached to the page, making it a child element.
canvas.addItem(page); // Page is attached to the canvas, making it a child element
manifest.addItem(canvas); // Canvas it attached to the manifest
```

### 4) Exporting
The single method `Manifest.toJSONString()` reformats and compiles the manifest
and its children into their appropriate formats and exports the entire manifest
as a single JSON string. This can then be exported/written to an I/O stream or
file:

```javascript
console.log(manifest.toJSONString());
```

```javascript
const fs = require('fs');
fs.writeFile("MyManifest.json", manifest.toJSONString(), function(e){
  if(e){
    return console.error("Error: " + e);
  }

  console.log("Write to MyManifest.json was successful");
});
```
