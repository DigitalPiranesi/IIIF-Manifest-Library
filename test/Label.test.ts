import { expect } from "chai";
import Label from "../src/types/Label";
describe("label", () => {
    describe("constructor", () => {
        context("when a valid language and label array are passed", () => {
            it("should return a label instance", () => {
                const test = new Label("en", ["testlabel"]);
                expect(test).to.have.property("languageMap");
                // @ts-ignore
                expect(test.getValues("en")[0]).to.equal("testlabel");
                expect(test.toJSONString()).to.equal("{\"en\":[\"testlabel\"]}");
            })
        })
    })
    describe("add, get and remove values", () => {
        context("when a new language map is added", () => {
            it("should return a label instance", () => {
                const test = new Label("en", ["testlabel"]);
                test.addValue("de", ["german testlabel"])
                // @ts-ignore
                expect(test.getValues("de")[0]).to.equal("german testlabel");
            })
        })
        context("when a value to an existing language map is added", () => {
            it("should return a label instance", () => {
                const test = new Label("en", ["testlabel"]);
                test.addValue("en", ["second english testlabel"])
                // @ts-ignore
                expect(test.getValues("en")[1]).to.equal("second english testlabel");
            })
        })
        context("when an existing language map is removed", () => {
            it("should return null thereafter", () => {
                const test = new Label("en", ["testlabel"]);
                test.removeLabel("en");
                // @ts-ignore
                expect(test.getValues("en")).to.equal(null);
            })
        })
    })
})
