


function add(a, b) {
  return a + b | 0;
}

function addFloat(a, b) {
  return a + b;
}

function addString(a, b) {
  return a + b;
}

function addFloatAndInt(a, b) {
  return a + b;
}

console.log(3);

console.log(1 + 2.2);

console.log("124" + (2.2).toString());

var someString = "124123";

var someInt = 1124;

var someFloat = 1124.2;

var someBoolean = true;

var someChar = /* "1" */49;

var someIntAndFloatTuple = /* tuple */[
  1,
  1.1
];

var vasiliy = {
  name: "Vasya",
  age: 59
};

export {
  add ,
  addFloat ,
  addString ,
  addFloatAndInt ,
  someString ,
  someInt ,
  someFloat ,
  someBoolean ,
  someChar ,
  someIntAndFloatTuple ,
  vasiliy ,
  
}
/*  Not a pure module */
