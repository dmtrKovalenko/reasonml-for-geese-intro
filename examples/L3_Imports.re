open L1_Variables;

sayHi("From new file");
L2_TypeInference.add(1, 2);

// ======================================== ///
open L3_InnerModule;

Js.log(fromFile);

Js.log(InnerFromFile.fromInnerModule);
Js.log(L3_InnerModule.InnerFromFile.Gusi.fromGusi);

let myFn = () => {
  open! L3_InnerModule.InnerFromFile.Gusi;

  log(fromGusi);
};