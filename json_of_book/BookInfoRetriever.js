const fs = require('fs');
const config = require('./digital_piranesi_sample_500.json');

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
  IS_VERSION_OF: "http://purl.org/dc/terms/isVersionOf",
  TYPE: "http://www.w3.org/1999/02/22-rdf-syntax-ns#type",
  TITLE: "http://purl.org/dc/terms/title",
  URN: "http://scalar.usc.edu/2012/01/scalar-ns#urn",
  VERSION: "http://scalar.usc.edu/2012/01/scalar-ns#version",
  VERSION_NUMBER: "http://open.vocab.org/terms/versionnumber",
  WAS_ATTRIBUTED_TO: "http://www.w3.org/ns/prov#wasAttributedTo",
  HAS_TARGET: "http://www.openannotation.org/ns/hasTarget",
  HAS_BODY: "http://www.openannotation/ns/hasBody"
};

let RDF_SYNTAX_TYPES = {
  COMPOSITE: "http://scalar.usc.edu/2012/01/scalar-ns#Composite",
  VERSION: "http://scalar.usc.edu/2012/01/scalar-ns#Version",
  MEDIA: "http://scalar.usc.edu/2012/01/scalar-ns#Media",
  ANNOTATION: "http://www.openannotation.org/ns/Annotation",
  INVALID_TYPE: -1
};

function is_defined(a){
  return (typeof a !== "undefined");
}

function is_date(a){
  return (Object.prototype.toString.call(a) === '[object Date]');
}

/**
 * These functions operate on a specific item within the RDF-LD JSON
 * object. For example, "http://piranesi-test.reclaim.hosting/without-mirador/front-end"
 */
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


// TODO: Fix
function rdfjson_get_annotation(annotation) {
  const urlPath = annotation.split("/"); //Splits URL into path segments
  annotation = urlPath[urlPath.length-1]; //Accesses last element which is the annotation
  annotation = annotation.replace(/-/g, " ") //Replaces all dashes in string with a space
  annotation = annotation.charAt(0).toUpperCase() + annotation.slice(1); //Changes the first character in the annotation to capital letter
  return annotation;
}

/**
 * Determine if two urls are loosely related in terms of RDF format.
 * For example, the strings:
 *     - https://scalar.usc.edu/works/piranesidigitalproject/media/1/4-of-v16-map
 *     - https://scalar.usc.edu/works/piranesidigitalproject/media/1/4-of-v16-map.5
 * Would return true.
 *
 * @param url The first url
 * @param other_url The second url
 * @return True if the two are related
 */
function rdfjson_is_same_page(url, other_url){
  if(url == other_url){
    return true;
  }

  /* Splits the URL into an array with each element being the string before
   * a decimal. */
  var index_of_period = url.lastIndexOf('.');
  var index_of_period_1 = other_url.lastIndexOf('.');
  var url_comparison = url.substr(0, index_of_period);
  var other_url_comparison = other_url.substr(0, index_of_period_1);

  if(url_comparison == other_url || other_url_comparison == url){
    return true;
  }
}

function rdfjson_get_all_nodes_and_child_nodes_from_url(url, obj){
  for(const item in obj){
    if(item == url){
      console.log("Found item: " + item);
    }else if(rdfjson_is_same_page(url, item)){
      console.log("Found child: " + item);
    }
  }
}

function rdfjson_does_annotation_belong_to_page(url, annotation){
  return rdfjson_is_same_page(url, annotation[IN_EASY_TERMS.HAS_TARGET][0].value);
}

function rdfjson_get_all_annotations_related_to_url(url, obj){
  for(const item in obj){
    console.log("Working with: " + item);
    if(rdfjson_get_type(obj[item]) == RDF_SYNTAX_TYPES.ANNOTATION &&
       rdfjson_does_annotation_belong_to_page(url, item)
    ){
      console.log("Found annotation: " + item);
    }
  }
}

(function(){
  rdfjson_get_all_nodes_and_child_nodes_from_url("https://scalar.usc.edu/works/piranesidigitalproject/media/1/4-of-v16-map", config);
  rdfjson_get_all_annotations_related_to_url("https://scalar.usc.edu/works/piranesidigitalproject/column-of-trajan", config);
})();

/*
 * Todo: fix

//Obtaining annotation
var annotation;
count = 0;
for(var i in config) {
  if(count == 4) {
    annotation = i.toString();
    break;
  }
  count++;
}
annotation = rdfjson_get_annotation(annotation);
console.log(annotation);*/
