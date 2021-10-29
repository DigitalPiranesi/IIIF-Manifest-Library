// Required to setup correct module resolution. See https://gist.github.com/branneman/8048520 for more.
require('module-alias/register');

const Lib = require("@lib");
import Label from "./types/Label";

function hello(compiler: string){
  console.log(`Hello from ${compiler}`);
  var a: number = 1;
  var b: number = 2;

  //Lib.ASSERT(a == b);
}

var label: Label = new Label("en", ["Tom and Jerry"]);

console.log(label.toJSONString());

hello("world!");
