const assert = require('assert');

var Manifest = require("../build/types/Manifest").default;

var manifest = new Manifest(3, "test_id");

/*describe("The manifest object", function() {
  it("should have a context object set to IIIF v3", function() {
    assert.equal('http://iiif.io/api/presentation/3/context.json', manifest["@context"]);
  });

  it("should have an id equal to 'test_id'", function() {
    assert.equal('test_id', manifest.id);
  });

  it("should have an items list", function(){
    assert.notEqual('undefined', manifest.items);
  });

  it("should have an items list with no elements", function(){
    assert.equal(0, manifest.items.length);
  });

  it("should not have a label", function(){
    assert.equal('', manifest.label.toJSONString());
  });
})*/
