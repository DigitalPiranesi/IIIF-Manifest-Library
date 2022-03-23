function(){
  const I3 = require("../build/index");

  var decoder = new RDFDecoder(config);
  var arrays = decoder.decode();


  //Clio notes: Making this less 'code-manual' and more user-input like?
  //Put in URL and name of page/image, and the rest of the information is similar
  //EX: user inputs: http://piranesi-test.reclaim.hosting/mirador/media/Pantheon.json?iiif-manifest=1
  // method parses 'Pantheon' as the main feature of the URL, inputs it into the '/____/' between media/ and /page or whatever
  // endpoint that the URL requires
  //Context will always be the same
  // Create Manifest
  var manifest = new I3.Manifest(3, "http://piranesi-test.reclaim.hosting/mirador/media/Pantheon.json?iiif-manifest=1");
  var canvas = new I3.ItemCanvas("http://piranesi-test.reclaim.hosting/mirador/media/pantheon/canvas/p1", 17711, 12932);
  var label = new I3.Label("en", ["Pantheon by Piranesi"]);
  var webannopage = new I3.ItemWebAnnotationPage("http://piranesi-test.reclaim.hosting/mirador/media/pantheon/page/p1/1");
  var annopage = new I3.ItemAnnotationPage("https://piranesi-test.reclaim.hosting/mirador/media/pantheon/page/p2/1")

  var webanno = new I3.ItemWebAnnotationImage("https://piranesi-test.reclaim.hosting/walts-test-book/media/pantheon/annotation/p0001-image", "painting", canvas, "https://env-4072537.us.reclaim.cloud/iiif/2/pantheon.jpg/full/full/0/default.jpg", 17711, 12932);
  webanno.addContext("http://iiif.io/api/presentation/3/context.json");

  //Clio notes: Make into separate method to pass in fields? From here through the annotations
  //label, webannopage, canvas, manifest, canvas
  //if variables != null then create whole manifest
  manifest.addLabel(label);
  webannopage.addItem(webanno);
  canvas.addItem(webannopage);
  manifest.addItem(canvas);
  canvas.addAnnotationPage(annopage);

  // Fetch annotation

  var annotations = [];
  var i = 0;

  // for(imageurl in images){
    for(const anno of arrays.parsed_annotations){
      i++;

      if(anno.uri == "https://scalar.usc.edu/works/piranesidigitalproject/view-of-the-piazza-della-rotonda"){
        var widthHeight = getWidthAndHeightDataFromServer(image);
        //var textualAnnotation = calculate_annotations(anno, /* TODO: Fetch */, /* TODO: Fetch */, /* TODO: Pass canvas URL */);

        console.log(textualAnnotation);
        annopage.addItem(textualAnnotation);
      }
    }
  // }
  console.log(manifest.toJSONString());
});
