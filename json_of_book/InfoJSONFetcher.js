// This allows for AJAX requests from within NodeJS.
// I think this may need re-written for web versions, but we will see.
const XMLHttpRequest = require('xhr2');

/**
 * Create a new XML-HTTP request with the specified format and parameters.
 *
 * @param method Valid HTTP method ("GET", "POST", "PUT", "DELETE")
 * @param url The URL to which to send the request.
 * @param options Various options that may be important. These can include various
 *                components, but the essentials are:
 *                > `params` is a JSON key-value pair for the request body.
 *                > `headers` is a JSON key-value pair for the request headers.
 * @note If `options.params` is set, then the `Content-type` header is automatically
 *       set to 'application/json'
 * @see https://developer.mozilla.org/en-US/docs/Web/HTTP/Messages
 * @see https://developer.mozilla.org/en-US/docs/Web/HTTP/Messages#http_requests
 * @see https://developer.mozilla.org/en-US/docs/Web/HTTP/Messages#http_responses
 */
const request = function(method, url, options){
  return new Promise(function(resolve, reject){
    var request = new XMLHttpRequest();

    request.open(method, url);
    request.onload = function(){
      if(request.status >= 200 && request.status < 300){
        resolve(request.response);
      }else{
        reject({
          status: request.status,
          statusText: request.statusText
        });
      }
    };
    request.onerror = function(){
      reject({
        status: request.status,
        statusText: request.statusText
      });
    };

    if(options.headers){
      Object.keys(options.headers).forEach(function(key){
        request.setRequestHeader(key, options.headers[key]);
      });
    }

    if(options.params){
      console.log(JSON.stringify(options.params));
      request.setRequestHeader("Content-type", "application/json");
      request.send(JSON.stringify(options.params));
    }else{
      request.send();
    }
  });
};

module.exports = request;
