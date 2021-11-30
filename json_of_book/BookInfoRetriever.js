const fs = require('fs');
const config = require('./exampleJSONofBook.json');

//Reads JSON file, output is in variable jsonString
fs.readFile('./exampleJSONofBook.json', 'utf8', (err, jsonString) => {
    if(err) {
        console.log("error in reading JSON of book", err)
        return
    } try {
        //const data = JSON.parse(jsonString)
        //var arrays = JSON.parse(JSON.stringify(jsonString))
        //TODO iterator of sorts here

    } catch(err) {
        console.log("Cannot parse JSON of book string", err)
    }

    //Prints out string version of JSON file
    //console.log(jsonString)
});

// I am taking a more functional approach to this part of the project instead
// of an object-oriented thing like we did before with the manifest generator.
// I really think we should translate from RDF and then get away from it as fast
// as possible.

/*
 * Steps to the program:
 *
 * 1. Check if a JSON object is a valid RDF JSON object.
 * 2. Scan through the object and find annotations
 * 3. Convert the RDF JSON object to simple properties:
 *    Annotation_Name, Annotation_Target, Annotation_Value
 * 4. Create an ItemAnnotation from this data (TODO later)
 */
let IN_EASY_TERMS = {
  ARTSTOR_URL: "http://simile.mit.edu/2003/10/ontologies/artstor#url",
  CONTENT: "https://rdfs.org/sioc/ns#content",
  CREATED: "http://purl.org/dc/terms/created",
  DEFAULT_VIEW: "http://scalar.usc.edu/2012/01/scalar-ns#defaultView",
  DESCRIPTION: "http://purl.org/dc/terms/description",
  HAS_VERSION: "http://purl.org/dc/terms/hasVersion",
  IS_LIVE: "http://scalar.usc.edu/2012/01/scalar-ns#isLive",
  IS_VERSION_OF: "http://purl.org/dc/terms/isVersionOf"
  TYPE: "https://www.w3.org/1999/02/22-rdf-syntax-ns#type",
  TITLE: "http://purl.org/dc/terms/title",
  URN: "http://scalar.usc.edu/2012/01/scalar-ns#urn",
  VERSION: "http://scalar.usc.edu/2012/01/scalar-ns#version",
  VERSION_NUMBER: "http://open.vocab.org/terms/versionnumber",
  WAS_ATTRIBUTED_TO: "http://www.w3.org/ns/prov#wasAttributedTo",
};

let RDF_SYNTAX_TYPES = {
  COMPOSITE: "http://scalar.usc.edu/2012/01/scalar-ns#Composite",
  VERSION: "http://scalar.usc.edu/2012/01/scalar-ns#Version",
  MEDIA: "http://scalar.usc.edu/2012/01/scalar-ns#Media"
  INVALID_TYPE: -1
};

function is_defined(a){
  return (typeof a === "undefined");
}

function is_date(a){
  return (Object.prototype.toString.call(a) === '[object Date]');
}

function rdfjson_get_type(obj){
  if(!is_defined(obj)){
    return RDF_SYNTAX_TYPES.INVALID_TYPE;
  }

  if(!is_defined(obj[IN_EASY_TERMS.TYPE])){
    return RDF_SYNTAX_TYPES.INVALID_TYPE;
  }

  return obj[IN_EASY_TERMS.TYPE][0].value;
}

function rdfjson_is_live(obj){
  if(!is_defined(obj) || !is_defined(obj[IN_EASY_TERMS.IS_LIVE])){
    return -1;
  }

  var live = parseInt(obj[IN_EASY_TERMS.IS_LIVE][0].value);

  if(!live || isNaN(live)){
    return -1;
  }

  return live;
}

function rdfjson_get_title(obj){
  if(!is_defined(obj) || !is_defined(obj[IN_EASY_TERMS.TITLE])){
    return -1;
  }

  return obj[IN_EASY_TERMS.TITLE][0].value;
}

function rdfjson_get_description(obj){
  if(!is_defined(obj) || !is_defined(obj[IN_EASY_TERMS.DESCRIPTION])){
    return -1;
  }

  return obj[IN_EASY_TERMS.DESCRIPTION][0].value;
}

function rdfjson_get_artstor_url(obj){
  if(!is_defined(obj) || !is_defined(obj[IN_EASY_TERMS.ARTSTOR_URL])){
    return -1;
  }

  return obj[IN_EASY_TERMS.ARTSTOR_URL][0].value;
}

function rdfjson_get_created_date_as_date_string(obj){
  if(!is_defined(obj) || !is_defined(obj[IN_EASY_TERMS.CREATED])){
    return -1;
  }

  return obj[IN_EASY_TERMS.CREATED][0].value;
}

function rdfjson_get_created_date_as_date_object(obj){
  var date = new Date(rdfjson_get_created_date_as_date_string(obj));

  if(!is_date(date)){
    return -1;
  }

  return date;
}
