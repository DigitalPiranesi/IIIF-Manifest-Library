const expected = {
  "@context": "http://iiif.io/api/presentation/3/context.json",
  "id": "https://piranesi-test.reclaim.hosting/walts-test-book/media/Manifest_TomJerryV2.json",
  "type": "Manifest",
  "label": {
    "en": [
      "Tom and Jerry doing the whole like fighting thing."
    ]
  },
  "items": []
};

var exec = require('child_process').exec;

function execute(command, callback){
    exec(command, function(error, stdout, stderr){ callback(stdout); });
};

function outAt(name){
  console.error("Output did not match expected: " + name);
  process.exit(1);
}

(function(){
  console.log("Beginning test of expected output...");

  execute("node dist/main.js", function(output){
    console.log("Expected: ");
    console.log(expected);
    console.log("\nReceived: ");
    console.log(JSON.parse(output));

    output = JSON.parse(output);

    if(expected["@context"] != output["@context"]){
      outAt("@context");
    }

    if(expected["id"] != output["id"]){
      outAt("id");
    }

    if(expected["type"] != output["type"]){
      outAt("type");
    }

    if(expected["label"].en[0] != output["label"].en[0]){
      outAt("label.en");
    }

    if(expected["items"].length != output["items"].length){
      outAt("items");
    }

    console.log("Test passed!");
    process.exit(0);
  });
})();
