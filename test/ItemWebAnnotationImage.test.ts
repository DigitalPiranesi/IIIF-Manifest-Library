import {expect} from "chai";
import ItemCanvas from "../src/types/ItemCanvas";
import ItemWebAnnotationImage from "../src/types/ItemWebAnnotationImage";
import EnumWebAnnotationMotivation from "../src/types/enums/EnumWebAnnotationMotivation";

describe("ItemWebAnnotationImage", () => {
    describe("constructor", () => {
        context("when a valid id and dimensions are passed", () => {
            it("should return an ItemCanvas instance", () => {
                const testcanvas = new ItemCanvas("testcanvas", 100, 100);
                const test = new ItemWebAnnotationImage("testimage", EnumWebAnnotationMotivation.PAINTING, testcanvas, "image.jpeg", 100, 100);
                expect(test.body.width).to.equal(100);
                expect(test.body.height).to.equal(100);
                expect(test.id).to.equal("testimage");
                expect(test.toJSONString()).to.equal("{\"id\":\"testimage\",\"items\":[],\"type\":\"Annotation\",\"@context\":\"http://www.w3.org/ns/anno.jsonld\",\"motivation\":\"painting\",\"target\":\"testcanvas\",\"body\":{\"id\":\"image.jpeg\",\"type\":\"Image\",\"format\":\"image/jpeg\",\"height\":100,\"width\":100}}");
            })
        })
    })
})
