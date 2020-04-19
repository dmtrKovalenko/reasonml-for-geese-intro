

import * as L1_Variables$ReasonReactExamples from "./L1_Variables.bs.js";
import * as L3_InnerModule$ReasonReactExamples from "./L3_InnerModule.bs.js";
import * as L2_TypeInference$ReasonReactExamples from "./L2_TypeInference.bs.js";

L1_Variables$ReasonReactExamples.sayHi("From new file");

L2_TypeInference$ReasonReactExamples.add(1, 2);

console.log(L3_InnerModule$ReasonReactExamples.fromFile);

console.log(L3_InnerModule$ReasonReactExamples.InnerFromFile.fromInnerModule);

console.log(L3_InnerModule$ReasonReactExamples.InnerFromFile.Gusi.fromGusi);

function myFn(param) {
  console.log(L3_InnerModule$ReasonReactExamples.InnerFromFile.Gusi.fromGusi);
  return /* () */0;
}

export {
  myFn ,
  
}
/*  Not a pure module */
