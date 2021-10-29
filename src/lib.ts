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

function clone(obj: any): string{
  return JSON.parse(JSON.stringify(obj));
}

function softClone(obj: any): any{
  return Object.assign({}, obj);
}

export { ASSERT, clone, softClone};
