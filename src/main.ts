// Required to setup correct module resolution. See https://gist.github.com/branneman/8048520 for more.
require('module-alias/register');

const Lib = require("@lib");
import Label from "./types/Label";
import Manifest from "./types/Manifest";
import Item from "./types/Item";
import ItemCanvas from "./types/ItemCanvas";

var label: Label = new Label("en", ["Tom and Jerry doing the whole like fighting thing."]);
var manifest: Manifest = new Manifest(3, "https://piranesi-test.reclaim.hosting/walts-test-book/media/Manifest_TomJerryV2.json");
var item: Item = new ItemCanvas("test-canvas", 10, 10);

manifest.addLabel(label);
manifest.addItem(item);

console.log(manifest.toJSONString());
