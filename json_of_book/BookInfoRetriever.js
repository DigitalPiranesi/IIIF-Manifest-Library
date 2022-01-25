/**
 * Authors: Clio Lang, Walter Pach <wpach@email.sc.edu>
 * License: See LICENSE file.
 *
 * This program provides a mechanism for parsing an RDF-JSONLD string into
 * formatted annotations. To use, provide `config` as a Javascript object
 * containing the JSON data.
 *
 * The result of this is an object containing multiple arrays which can be
 * further processed to construct any format you'd like!
 *
 * Usage:
 *
 * var decoder = new RDFDecoder({...});
 * var arrays = decoder.decode();
 *
 */
const fs = require('fs');
const config = require('./digital_piranesi_sample_500.json');

const IN_EASY_TERMS = {
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
  HAS_BODY: "http://www.openannotation.org/ns/hasBody",
  CONTENT: "http://rdfs.org/sioc/ns#content"
};

const RDF_SYNTAX_TYPES = {
  COMPOSITE: "http://scalar.usc.edu/2012/01/scalar-ns#Composite",
  VERSION: "http://scalar.usc.edu/2012/01/scalar-ns#Version",
  MEDIA: "http://scalar.usc.edu/2012/01/scalar-ns#Media",
  ANNOTATION: "http://www.openannotation.org/ns/Annotation",
  INVALID_TYPE: -1
};

/**
 * Version: 0.1
 */
class RDFDecoder {
  /**
   * Constructs a new RDFJSON decoder
   *
   * @param obj A JavaScript object (not string) that contains the RDFJSON
   */
  constructor(obj) {
    this.obj = obj;
  }

  is_defined(a){
    return (typeof a !== "undefined");
  }

  is_date(a){
    return (Object.prototype.toString.call(a) === '[object Date]');
  }

  /**
   * Get the type of the child element
   *
   * @param child The uri of which to fetch the type
   * @return The type using the standard format or -1 if invalid.
   * @see RDF_SYNTAX_TYPES
   */
  get_type(child) {
    if (!this.is_defined(this.obj[child])) {
      console.log("Child: " + child + " not defined");
      return RDF_SYNTAX_TYPES.INVALID_TYPE;
    }

    if (!this.is_defined(this.obj[child][IN_EASY_TERMS.TYPE])) {
      return RDF_SYNTAX_TYPES.INVALID_TYPE;
    }

    return this.obj[child][IN_EASY_TERMS.TYPE][0].value;
  }

  /**
   * Check if the element is live or not
   *
   * @param child The uri of which to fetch the status.
   * @return A positive integer if live, otherwise -1
   */
  is_live(child) {
    if (!this.is_defined(this.obj[child]) || !this.is_defined(this.obj[child][IN_EASY_TERMS.IS_LIVE])) {
      return -1;
    }

    var live = parseInt(this.obj[child][IN_EASY_TERMS.IS_LIVE][0].value);

    if (!live || isNaN(live)) {
      return -1;
    }

    return live;
  }

  /**
   * Get the target of an element.
   *
   * @note There are no null-checks for the return values
   * @param child The uri of which to fetch the target
   * @return An object containing two properties: `base_uri` and `xywh` which is the target's uri and coordinates respectively.
   */
  get_target(child) {
    if (!this.is_defined(this.obj[child]) || !this.is_defined(this.obj[child][IN_EASY_TERMS.HAS_TARGET])) {
      return -1;
    }

    var raw_string = this.obj[child][IN_EASY_TERMS.HAS_TARGET][0].value;
    var array_of_strings = raw_string.split("#");
    var uri = array_of_strings[0];
    var xywh = array_of_strings[1].split("=")[1];

    return {
      base_uri: uri,
      xywh: xywh
    };
  }

  /**
   * Get the version (uri) of an element.
   *
   * @param child The uri of which to fetch the version uri
   * @return A string uri of the version.
   */
  get_version(child) {
    if (!this.is_defined(this.obj[child]) || !this.is_defined(this.obj[child][IN_EASY_TERMS.VERSION])) {
      return -1;
    }

    return this.obj[child][IN_EASY_TERMS.VERSION][0].value;
  }

  /**
   * Get the content of an annotation.
   *
   * @note This method only opperates on RDF_SYNTAX_TYPES.ANNOTATION type elements.
   * @param child The uri of which to fetch the content
   * @return A string containing the content.
   */
  get_content(child) {
    if (!this.is_defined(this.obj[child]) || !this.is_defined(this.obj[child][IN_EASY_TERMS.IS_LIVE])) {
      return -1;
    }

    return this.obj[child][IN_EAST_TERMS.CONTENT][0].value;
  }

  /**
   * Get the title of an element.
   *
   * @param child The uri of which to fetch the title.
   * @return A string of the title
   */
  get_title(child) {
    if (!this.is_defined(this.obj[child]) || !this.is_defined(this.obj[child][IN_EASY_TERMS.TITLE])) {
      return -1;
    }

    return this.obj[child][IN_EASY_TERMS.TITLE][0].value;
  }

  /**
   * Get the description of an element.
   *
   * @param child The uri of which to fetch the title.
   * @return A string of the description.
   */
  get_description(child) {
    if (!this.is_defined(this.obj[child]) || !this.is_defined(this.obj[child][IN_EASY_TERMS.DESCRIPTION])) {
      return -1;
    }

    return this.obj[child][IN_EASY_TERMS.DESCRIPTION][0].value;
  }

  get_artstor_url(child) {
    if (!this.is_defined(this.obj[child]) || !this.is_defined(this.obj[child][IN_EASY_TERMS.ARTSTOR_URL])) {
      return -1;
    }

    return this.obj[child][IN_EASY_TERMS.ARTSTOR_URL][0].value;
  }

  get_created_date_as_date_string(child) {
    if (!this.is_defined(this.obj[child]) || !this.is_defined(this.obj[child][IN_EASY_TERMS.CREATED])) {
      return -1;
    }

    return this.obj[child][IN_EASY_TERMS.CREATED][0].value;
  }

  get_created_date_as_date_object(child) {
    var date = new Date(this.get_created_date_as_date_string(this.obj[child]));

    if (!this.is_date(date)) {
      return -1;
    }

    return date;
  }

  is_version_of(child) {
    if (!this.is_defined(this.obj[child]) || !this.is_defined(this.obj[child][IN_EASY_TERMS.IS_VERSION_OF])) {
      return -1;
    }

    return this.obj[child][IN_EASY_TERMS.IS_VERSION_OF][0].value;
  }

  /**
   * Decode the provided object into arrays of different structures:
   *
   * {
   *     media_pages        - An array of uris with the Media type
   *     composites         - An array of uris with the Composite type
   *     annotations        - An array of uris with the Annotation type
   *     versions           - An array of uris with the Version type
   *     parsed_annotations - An array of parsed annotations.
   *         {
   *             title
   *             content
   *             xywh
   *             uri
   *         }
   * }
   */
  decode() {
    var config = this.obj;
    var media_pages = [];
    var composites = [];
    var annotations = [];
    var versions = [];

    /*
     * Parsed format:
     *
     * {
     *   title,
     *   content,
     *   xywh,
     *   uri,
     * }
     */
    var parsed_annotations = [];

    for (const item in config) {
      switch (this.get_type(item)) {
        case RDF_SYNTAX_TYPES.MEDIA:
          media_pages.push(item);
          break;
        case RDF_SYNTAX_TYPES.ANNOTATION:
          annotations.push(item);
          break;
        case RDF_SYNTAX_TYPES.COMPOSITE:
          composites.push(item);
          break;
        case RDF_SYNTAX_TYPES.VERSION:
          versions.push(item);
          break;
        default:
          console.log("  Unknown type: " + this.get_type(item) + ". Please review: " + item);
          break;
      }
    }

    /*console.log("Media: " + JSON.stringify(media_pages));
    console.log("Composites: " + JSON.stringify(composites));
    console.log("Annotations: " + JSON.stringify(annotations));
    console.log("Versions: " + JSON.stringify(versions));*/

    /*
     * 1. Find the `Media` page
     * 2. Check for it's current version
     * 3. Find the version within the file
     *     a. `Type` is Version
     *     b. `isVersionOf` is `Media` page uri
     * 4. Find annotations
     *     a. `Type` is Annotation
     *     b. Check for correct target (uri and version from step 3; avoids version conflicts)
     *     c. Find the "composite" body with the `hasBody` property
     *         I. Get title from `title` property
     *         II. Get content from `content` property
     *     d. Position using the `hasTarget` parsed string
     */
    for (const media_page_uri of media_pages) {
      // 1
      if (!this.is_live(media_page_uri)) {
        continue;
      }

      // 2
      var version_string = this.get_version(media_page_uri);

      // 3a
      if (version_string < 0 || versions.indexOf(version_string) < 0) {
        console.log("Cannot parse version. Skipping.");
        continue;
      }

      var version = config[version_string];

      // 3b
      if (this.is_version_of(version_string) != media_page_uri) {
        continue;
      }

      // 4, 4a
      for (const anno of annotations) {
        // 4b
        if (!this.get_target(anno) || this.get_target(anno).base_uri != version_string) {
          continue;
        }

        var annotation_body_uri = config[anno][IN_EASY_TERMS.HAS_BODY][0].value;

        var annotation_title = this.get_title(annotation_body_uri);
        var annotation_content = this.get_content(annotation_body_uri);
        var target = this.get_target(anno);

        parsed_annotations.push({
          title: annotation_title || "",
          content: annotation_content || "",
          xywh: target.xywh || "",
          uri: target.base_uri
        });
      }
    }

    // Optional status report
    console.log("\n\nWas able to identify " + parsed_annotations.length + " annotations.");

    return {
      media_pages: media_pages,
      composites: composites,
      annotations: annotations,
      parsed_annotations: parsed_annotations,
      versions: versions
    }
  }
}

(function(){
  const I3 = require("../build/index");

  var decoder = new RDFDecoder(config);
  var arrays = decoder.decode();

  var packaged_pages = [];

  for(const media_page of arrays["media_pages"]){
      if(media_page != null){
        for(const annotation of arrays["parsed_annotations"]){
          // TODO: Instead of comparing the annotation.uri it needs to be trimmed of the version.
          if(annotation.uri == media_page){
            console.log("Found annotation for page: " + media_page);
            packaged_pages.push({uri: media_page, annotation: annotation});
          }
        }
      }
  }

  console.log(JSON.stringify(packaged_pages));
})();
