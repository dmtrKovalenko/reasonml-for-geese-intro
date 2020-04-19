

import * as List from "bs-platform/lib/es6/list.js";
import * as Block from "bs-platform/lib/es6/block.js";
import * as Js_math from "bs-platform/lib/es6/js_math.js";
import * as Caml_builtin_exceptions from "bs-platform/lib/es6/caml_builtin_exceptions.js";

function handleResult(response) {
  if (typeof response === "number") {
    return "Loading...";
  } else if (response.tag) {
    var statusCode = response[0];
    if (statusCode !== 401) {
      if (statusCode > 500) {
        return "Oopsy, we have a problem on server side";
      } else {
        return "An error appeared, statusCode: " + String(statusCode);
      }
    } else {
      return "It looks like you are not authorized";
    }
  } else {
    return "Your data is: " + response[0].toString();
  }
}

console.log(handleResult(/* Rejected */Block.__(1, [401])));

var match_000 = Js_math.random_int(1, 1);

var match_001 = /* :: */[
  Js_math.random_int(2, 2),
  /* [] */0
];

var a = match_000;

var exit = 0;

if (a !== 1) {
  exit = 1;
} else {
  var match = match_001;
  if (match && !(match[0] !== 2 || match[1])) {
    console.log("This is an array with item 1 and 2");
  } else {
    exit = 1;
  }
}

if (exit === 1) {
  console.log("list with the head value " + String(a));
}

var exit$1 = 0;

var item;

try {
  item = List.find((function (item) {
          return item === 4;
        }), /* :: */[
        1,
        /* :: */[
          2,
          /* :: */[
            3,
            /* [] */0
          ]
        ]
      ]);
  exit$1 = 1;
}
catch (exn){
  if (exn === Caml_builtin_exceptions.not_found) {
    console.log("No such item found!");
  } else {
    throw exn;
  }
}

if (exit$1 === 1) {
  console.log(item);
}

function conditionIf(a) {
  if (a === 1) {
    return 1;
  } else {
    return 2;
  }
}

function conditionTernary(a) {
  if (a === 1) {
    return 1;
  } else {
    return 2;
  }
}

function conditionSwitch(a) {
  if (a !== 1) {
    return 2;
  } else {
    return 1;
  }
}

var res = ["2"].find((function (a) {
        return a === "1";
      }));

console.log(res !== undefined ? "Found result: " + res : "Nothing found");

var something = 12;

var nothing = undefined;

export {
  handleResult ,
  conditionIf ,
  conditionTernary ,
  conditionSwitch ,
  something ,
  nothing ,
  
}
/*  Not a pure module */
