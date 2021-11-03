"use strict";
// Required to setup correct module resolution. See https://gist.github.com/branneman/8048520 for more.
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Label_1 = __importDefault(require("./types/Label"));
var Manifest_1 = __importDefault(require("./types/Manifest"));
var ItemCanvas_1 = __importDefault(require("./types/ItemCanvas"));
var label = new Label_1.default();
var manifest = new Manifest_1.default(3, "https://piranesi-test.reclaim.hosting/walts-test-book/media/Manifest_TomJerryV2.json");
var item = new ItemCanvas_1.default("test-canvas", 10, 10);
label.addValue("en", ["Hello world!"]);
label.addValue("fr", ["Bonjour, monde!", "Salut, world!"]);
manifest.addLabel(label);
console.log(manifest.toJSONString());
