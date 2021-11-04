/**
 * Make an assertion and halt execution if it fails.
 *
 * @param An assertion to check
 * @throws Error if assertion is false or undefined.
 * @return True if the assertion passes in case someone wants to make sure it does.
 */
function ASSERT(test?: any){
  if(test === undefined || !test){
    throw new Error("Assertion failed: " + JSON.stringify(test));
  }else{
    return true;
  }
}

/**
 * Clones an object and removes all the functions, references, etc.
 * Think about this as a "hard clone" that only copies values, not references.
 *
 * @param obj The object to copy
 * @return Object without any references and functions.
 */
function clone(obj: any): string{
  return JSON.parse(JSON.stringify(obj));
}

/**
 * Clones an object but preserves its references in its properties.
 *
 * @param obj The object to copy.
 * @return A new object with all properties of the old.
 */
function softClone(obj: any): any{
  return Object.assign({}, obj);
}

/**
 * Prototype function to add one or more values to an array without knowing what
 * the added value is or how many there are.
 *
 * @param obj The array object
 * @param value The value(s) to add to the array
 * @return The modified array or `null` if obj is not an array..
 */
function addAll(obj: any, value: any | any[]){
  if(Array.isArray(obj)){
    if(Array.isArray(value)){
      for(const element of value){
        obj.push(element);
      }
    }else{
      obj.push(value);
    }

    return obj;
  }else{
    return null;
  }
}

function isDefined(obj: any){
  return (typeof obj !== "undefined" ? true : false);
}

export { ASSERT, clone, softClone, addAll, isDefined };
