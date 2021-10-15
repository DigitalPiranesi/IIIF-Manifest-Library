/**
 * Modular context manager for the manifest generator.
 *
 * This file provides the properties and functionality to modularly load IIIF
 * contexts and specifications into the manifest generator, allowing the user to
 * specify, switch, and convert between contexts.
 *
 * Essentially, each context is given a directory within the ```contexts```
 * directory, named with the version number. Within each is, at minimum, a
 * module named ```context.js``` which exports the properties and methods for
 * using/initializing the context. The manager mainly provides functionality
 * to dynamically require these contexts without needing to know which are
 * currently supported. All that is required is an entry in the
 * ```available_contexts``` field below.
 *
 * @author Walter Pach
 * @date 10/6/2021
 */

// A list of the available contexts. The most recent should always be listed last.
// The older the context, the higher on the list.
const available_contexts = [
  {
    version: "3",
    directory: "latest",
    active: true
  }
];

var current_context = {};

// Fetch the latest available context by referencing the last in the array.
var getLatestContextObject = function(){
    if(available_contexts.length > 0){
      return available_contexts[available_contexts.length - 1]
    }

    return -1;
};

// Fetch the context by the version number.
// @param version The version number. Can be a String or a Number.
var getContextObjectByVersion = function(version){
  // Check if version is a number, either of String or Number type.
  if(!isNaN(version)){
    for(const context of available_contexts){
      if(context.version.toString() == version.toString() && context.active == true){
        return context;
      }
    }
  }else{
    return -1;
  }
};

var getContextRequirePathByVersion = function(version){
  var contextObject = getContextObjectByVersion(version);

  if(contextObject != -1){
    return __dirname + "/" + contextObject.directory + "/context";
  }else{
    return -1;
  }
};

var getContextByVersion = function(version){
  var context_object = getContextObjectByVersion(version);

  if(context_object){
    var context = require(__dirname + "/" + context_object.directory + "/context");

    if(context.valid == true){
      return context;
    }else{
      return -1;
    }
  }else{
    return -1;
  }
};

var getLatestContext = function(){
  var context_object = getLatestContextObject();

  if(context_object){
    var context = require(__dirname + "/" + context_object.directory + "/context");

    if(context.valid == true){
      return context;
    }else{
      return -1;
    }
  }else{
    return -1;
  }
};

var switchContext = function(version){
  if(!version || isNaN(version)){return -1;}

  var context = getContextByVersion(version);

  if(!context){return -1};

  current_context = context;
  return current_context;
};

module.exports = (function(){
  return {
    getLatestContext: getLatestContext,
    getLatestContextObject: getLatestContextObject,
    getContextObjectByVersion: getContextObjectByVersion,
    getContextRequirePathByVersion: getContextRequirePathByVersion,
    getContextByVersion: getContextByVersion,
    getRequire: getContextRequirePathByVersion,
    switchContext: switchContext
  }
})();
