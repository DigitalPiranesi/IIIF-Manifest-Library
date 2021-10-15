/**
 * Handles the invocation of "-c" or "--context" flags, providing context
 * switching. Dynamically loads the appropriate context into the NodeJS context.
 *
 * @see contexts/manager.js
 */
function handleContextArgument(arguments, index){
  if(isNaN(arguments[index + 1])){
    console.error("Argument following context flag must be a version number.");
    return -1;
  }else{
    var version = new Number(arguments[index + 1]);
    var context = context_manager.switchContext(version);

    if(context != -1){
      console.log("Using context v" + version);
      return index + 1;
    }else {
      console.error("Failed to load specified context, version: " + version);
      return -1;
    }
  }
}

/**
 * Handles the invocation of the "-v" or "--version" flags, just displaying
 * hard-coded version information.
 */
function handleVersionArgument(arguments, index){
  console.log("\nManifestGenerator v0.1 by Walter Pach.");
  console.log("See https://github.com/waltster/DigitalPiranesi for more information.\n");

  return index;
}

function handleHelpArgument(arguments, index, flag_list){
  handleVersionArgument();

  if(!flag_list){ return; }

  for(const flag of flag_list){
    var names = flag.names.toString();

    console.log("  " + names + "\t: " + flag.description);
  }

  return index;
}

module.exports = {
  handleVersionArgument: handleVersionArgument,
  handleHelpArgument: handleHelpArgument,
  handleContextArgument: handleContextArgument
};
