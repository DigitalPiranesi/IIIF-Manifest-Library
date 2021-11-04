// Required to setup correct module resolution. See https://gist.github.com/branneman/8048520 for more.

import * as Lib from "./lib";
import Label from "./types/Label";
import Manifest from "./types/Manifest";
import Item from "./types/Item";
import ItemCanvas from "./types/ItemCanvas";
import ItemWebAnnotationPage from "./types/ItemWebAnnotationPage";

var label: Label = new Label();
var manifest: Manifest = new Manifest(3, "https://piranesi-test.reclaim.hosting/walts-test-book/media/Manifest_TomJerryV2.json");
var item: Item = new ItemCanvas("test-canvas", 10, 10);

label.addValue("en", ["Hello world!"]);
label.addValue("fr", ["Bonjour, monde!", "Salut, world!"]);

manifest.addLabel(label);
manifest.addItem(item);

item.addItem(new ItemWebAnnotationPage(";"));

console.log(manifest.toJSONString());
console.log(item);
