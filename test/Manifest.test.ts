import { expect } from "chai";
import manifest from "../src/types/Manifest";
import Label from "../src/types/Label";
import Canvas from "../src/types/ItemCanvas"
describe("manifest", () => {
    describe("constructor", () => {
        context("when a valid contextversion and and URI are passed", () => {
            it("should return a manifest instance", () => {
                const test = new manifest(3, "http://piranesi-test.reclaim.hosting/mirador/media/Pantheon.json?iiif-manifest=1");
                expect(test).to.have.property("@context");
                expect(test).to.have.property("id");
                expect(test).to.have.property("label");
                expect(test).to.have.property("items");
            })
            it("should return a Stringified version of itself", () => {
                const test = new manifest(3, "http://piranesi-test.reclaim.hosting/mirador/media/Pantheon.json?iiif-manifest=1");
                expect(test.toJSONString()).to.equal("{\"id\":\"http://piranesi-test.reclaim.hosting/mirador/media/Pantheon.json?iiif-manifest=1\",\"type\":\"Manifest\",\"@context\":\"http://iiif.io/api/presentation/3/context.json\",\"label\":{\"en\":[]},\"items\":[]}");
            })
        })
    })
    describe("set and get label", () => {
        context("when a label is set", () => {
            it("should return the label", () => {
                const test = new manifest(3, "http://piranesi-test.reclaim.hosting/mirador/media/Pantheon.json?iiif-manifest=1");
                test.addLabel(new Label("en",["testlabel"]));
                const label = test.getLabel();
                expect(label).to.have.property("languageMap");
                // @ts-ignore
                expect(label.languageMap.get("en")[0]).to.equal("testlabel");
            })
        })
        context("when a label is not set", () => {
            it("should return null", () => {
                const test = new manifest(3, "http://piranesi-test.reclaim.hosting/mirador/media/Pantheon.json?iiif-manifest=1");
                test.removeLabel();
                const label = test.getLabel();
                expect(label).to.equal(null);
            })
        })
    })
    describe("set and get item", () => {
        context("when an item is added", () => {
            it("should be able to retrieve the item by id", () => {
                const test = new manifest(3, "http://piranesi-test.reclaim.hosting/mirador/media/Pantheon.json?iiif-manifest=1");
                test.addItem(new Canvas("canvas-1", 100, 100));
                expect(test.getItem("canvas-1")).to.have.property("width");
                expect(test.getItem("canvas-1")).to.have.property("height");
                expect(test.getItemList().length).to.equal(1);
            })
        })
        context("when an invalid item id is requested", () => {
            it("should return null", () => {
                const test = new manifest(3, "http://piranesi-test.reclaim.hosting/mirador/media/Pantheon.json?iiif-manifest=1");
                expect(test.getItem("canvas-1")).to.equal(null);
            })
        })
    })
})
