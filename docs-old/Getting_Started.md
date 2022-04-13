# Getting Started

Every `Item` can contain child items which allows one to build a full manifest.
Every manifest begins with a `Manifest` object:

```javascript
// Context version, URL of manifest
var manifest = new Manifest(3, "https://example.org/manifest.json");
```

After this, you can create a Canvas and add it to the manifest:

```javascript
// URI of the canvas, width in pixels, height in pixels.
var canvas = new ItemCanvas("https://example.org/canvas/p1", 100, 100);
manifest.addItem(canvas);
```

You can construct Web Annotation pages and Web Annotations the same way:

```javascript
var annotation_page = new ItemWebAnnotationPage("https://example.org/page/p1/1");
var image: ItemWebAnnotationImage = new ItemWebAnnotationImage("https://example.org/annotation/p0001-image", EnumWebAnnotationMotivation.PAINTING, canvas, "https://example.org/example.jpeg/full/full/0/default.jpg", 300, 168);

annotation_page.addItem(image);
canvas.addItem(annotation_page);
```

You can then mark-up a canvas by adding regular annotation pages to it:

```javascript
var markup_page = new ItemAnnotationPage("https://example.org/page/p2/1");
var textualAnnotation: ItemAnnotation = new ItemTextualAnnotation("https://example.org/annotation/p0002-text", EnumAnnotationMotivation.COMMENTING, "Hello world!", "en", "https://example.org/canvas/p1#xywh=195,105,30,30");

markup_page.addItem(textualAnnotation);
canvas.addAnnotationPage(markup_page);
```
