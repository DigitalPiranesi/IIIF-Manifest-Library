import { expect } from "chai";
import ItemCanvas from "../src/types/ItemCanvas";
import ItemAnnotationPage from "../src/types/ItemAnnotationPage";
import ItemWebAnnotationPage from "../src/types/ItemWebAnnotationPage";
describe("ItemCanvas", () => {
    describe("constructor", () => {
        context("when a valid id and dimensions are passed", () => {
            it("should return an ItemCanvas instance", () => {
                const test = new ItemCanvas("testcanvas", 100, 100);
                expect(test.width).to.equal(100);
                expect(test.height).to.equal(100);
                expect(test.id).to.equal("testcanvas");
                expect(test.toJSONString()).to.equal("[]");
            })
        })
    })
    describe("add and get annotations", () => {
        context("when an AnnotationsPage is added", () => {
            it("should be part of the annotations array", () => {
                const test = new ItemCanvas("testcanvas", 100, 100);
                const testpage = new ItemAnnotationPage("testpage");
                test.addAnnotationPage(testpage)
                expect(test.getAnnotationPages()[0].id).to.equal("testpage");
            })
        })
    })
    describe("add and get items", () => {
        context("when an WebAnnotationsPage is added", () => {
            it("should be part of the items array", () => {
                const test = new ItemCanvas("testcanvas", 100, 100);
                const testpage = new ItemWebAnnotationPage("testpage");
                test.addWebAnnotationPage(testpage)
                expect(test.getWebAnnotationPages()[0].id).to.equal("testpage");
                expect(test.getWebAnnotationPages()[0].toJSONString()).to.equal("{\"id\":\"testpage\",\"items\":[],\"type\":\"AnnotationPage\"}");
            })
        })
    })
})
