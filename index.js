// TODO:
//   1. Write a command-line too for creating test manifests
//   2. Write a simple HTML interface for creating test manifests

const context_manager = {} // TODO: require('./src/manager');
const arguments = require('./arguments');

const flag_list = [
  {names: ["-c", "--context"], description: "Change the IIIF version context. Usage: -c VERSION_NUMBER. Must be included within the 'contexts' directory.", method: arguments.handleContextArgument},
  {names: ["-v", "--version"], description: "Display version information.", method: arguments.handleVersionArgument},
  {names: ["-h", "--help"], description: "Display program help information.", method: arguments.handleHelpArgument}
];

// Not sure how I like this, but it works for now. This will just execute once
// NodeJS reaches it.
(function(){
  let args = process.argv.splice(2);

  // This loop iterates over each argument. By default, the index for arguments
  // increases with each iteration, but also allows individual handlers to
  // increment/decrement the index as needed (for example, if the argument has
  // options/variables).
  var i = 0;

  for(i = 0; i < args.length; i++){
    var found_flag = false;

    // Rather than using a series of if statements or a switch, this just loops
    // over a global lookup table. I know it is not an especially fast method,
    // but it is simple and fairly low cost for this purpose.
    for(const flag of flag_list){
      if(flag.names.includes(args[i])){
        found_flag = true;
        i = (flag.method)(args, i, flag_list);

        // If a flag handler errored, exit the program. This prevents the program
        // from continuing executing if one of the arguments failed to do what
        // it needed to environmentally.
        if(i < 0){
          return;
        }
      }
    }

    if(!found_flag){
      console.error("Unrecognized option: '" + args[i] + "'. Use '-h' or '--help' for a list of arguments.");
      return;
    }
  }

})();
