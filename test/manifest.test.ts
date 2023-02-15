import { expect } from "chai";
import manifest from "../src/types/Manifest";
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
        })
        context("when an inv contextversion and and URI are passed", () => {
            it("should return a manifest instance", () => {
                const test = new manifest(3, "http://piranesi-test.reclaim.hosting/mirador/media/Pantheon.json?iiif-manifest=1");
                expect(test).to.have.property("@context");
                expect(test).to.have.property("id");
                expect(test).to.have.property("label");
                expect(test).to.have.property("items");
            })
        })
    })
})
