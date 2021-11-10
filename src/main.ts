// Required to setup correct module resolution. See https://gist.github.com/branneman/8048520 for more.

import * as Lib from "./lib";
import Label from "./types/Label";
import Manifest from "./types/Manifest";
import Item from "./types/Item";
import ItemCanvas from "./types/ItemCanvas";
import ItemWebAnnotationPage from "./types/ItemWebAnnotationPage";
import ItemWebAnnotation from "./types/ItemWebAnnotation";
import EnumWebAnnotationMotivation from "./types/enums/EnumWebAnnotationMotivation";
import EnumAnnotationMotivation from "./types/enums/EnumAnnotationMotivation";
import TextualAnnotation from "./types/TextualAnnotation";
import Annotation from "./types/Annotation";

var label: Label = new Label();
var manifest: Manifest = new Manifest(3, "https://piranesi-test.reclaim.hosting/walts-test-book/media/Manifest_TomJerryV2.json");
var canvas: ItemCanvas = new ItemCanvas("https://piranesi-test.reclaim.hosting/walts-test-book/media/testmanifest/canvas/p1", 10, 10);
var webAnnotationPage: Item = new ItemWebAnnotationPage("https://piranesi-test.reclaim.hosting/walts-test-book/media/testmanifest/page/p1/1");
var annotationPage: Item = new ItemWebAnnotationPage("https://piranesi-test.reclaim.hosting/walts-test-book/media/testmanifest/page/p2/1");

var annotation: Item = new ItemWebAnnotation("https://piranesi-test.reclaim.hosting/walts-test-book/media/testmanifest/annotation/p0001-image", EnumWebAnnotationMotivation.PAINTING, "https://piranesi-test.reclaim.hosting/walts-test-book/media/testmanifest/canvas/p1", "http://iiif.io/api/presentation/3/context.json");
var textualAnnotation: Annotation = new TextualAnnotation("https://piranesi-test.reclaim.hosting/walts-test-book/media/testmanifest/annotation/p0002-tag", EnumAnnotationMotivation.COMMENTING, "Hello world!", "en", "https://piranesi-test.reclaim.hosting/walts-test-book/media/testmanifest/canvas/p1#xywh=195,105,30,30");

label.addValue("en", ["Hello world!"]);
label.addValue("fr", ["Bonjour, monde!", "Salut, world!"]);
manifest.addLabel(label);

webAnnotationPage.addItem(annotation);
canvas.addItem(annotationPage);
canvas.addAnnotation(annotationPage);
manifest.addItem(canvas);

annotationPage.addItem(textualAnnotation);


console.log(manifest.toJSONString());
