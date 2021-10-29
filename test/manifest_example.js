const assert = require('assert');
const mlog = require("mocha-logger");

var Manifest = require("../dist/types/Manifest").default;
var Label = require("../dist/types/Label").default;

var manifest = new Manifest(3, "test_id");
var label = new Label("en", ["Tom and Jerry love to play."]);

manifest.addLabel(label);

describe("The manifest object", function() {
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

  it("should have a label", function(){
    assert.notEqual('', manifest.label.toJSONString());
  });

  it("should have a single, English label", function(){
    mlog.log("\n\tValue of label: " + manifest.label.getValues()[0]);
    assert.equal(1, manifest.label.values.length);
    assert.equal("Tom and Jerry love to play.", manifest.label.getValues()[0]);
  });
})
