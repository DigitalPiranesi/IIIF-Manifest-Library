// Required to setup correct module resolution. See https://gist.github.com/branneman/8048520 for more.

import * as Lib from "./lib";
import Label from "./types/Label";
import Manifest from "./types/Manifest";
import Item from "./types/Item";
import ItemCanvas from "./types/ItemCanvas";
import ItemWebAnnotationPage from "./types/ItemWebAnnotationPage";
import ItemWebAnnotation from "./types/ItemWebAnnotation";
import ItemWebAnnotationImage from "./types/ItemWebAnnotationImage";
import ItemAnnotationPage from "./types/ItemAnnotationPage";
import EnumWebAnnotationMotivation from "./types/enums/EnumWebAnnotationMotivation";
import EnumAnnotationMotivation from "./types/enums/EnumAnnotationMotivation";
import TextualAnnotation from "./types/TextualAnnotation";
import Annotation from "./types/Annotation";

var label: Label = new Label();
var manifest: Manifest = new Manifest(3, "https://piranesi-test.reclaim.hosting/walts-test-book/media/Manifest_TomJerryV2.json");
var canvas: ItemCanvas = new ItemCanvas("https://piranesi-test.reclaim.hosting/walts-test-book/media/testmanifest/canvas/p1", 10, 10);

var webAnnotationPage: Item = new ItemAnnotationPage("https://piranesi-test.reclaim.hosting/walts-test-book/media/testmanifest/page/p1/1");
var annotationPage: Item = new ItemWebAnnotationPage("https://piranesi-test.reclaim.hosting/walts-test-book/media/testmanifest/page/p2/1");

var image: ItemWebAnnotationImage = new ItemWebAnnotationImage("https://piranesi-test.reclaim.hosting/walts-test-book/media/testmanifest/annotation/p0001-image", EnumWebAnnotationMotivation.PAINTING, canvas, "https://env-4072537.us.reclaim.cloud/iiif/2/tomjerry.jpeg/full/full/0/default.jpg", 300, 168);
var textualAnnotation: Annotation = new TextualAnnotation("https://piranesi-test.reclaim.hosting/walts-test-book/media/testmanifest/annotation/p0002-tag", EnumAnnotationMotivation.COMMENTING, "Hello world!", "en", "https://piranesi-test.reclaim.hosting/walts-test-book/media/testmanifest/canvas/p1#xywh=195,105,30,30");

label.addValue("en", ["Hello world!"]);
label.addValue("fr", ["Bonjour, monde!", "Salut, world!"]);
manifest.addLabel(label);

webAnnotationPage.addItem(image);
canvas.addItem(webAnnotationPage);
canvas.addAnnotationPage(annotationPage);
manifest.addItem(canvas);

annotationPage.addItem(textualAnnotation);


console.log(manifest.toJSONString());
