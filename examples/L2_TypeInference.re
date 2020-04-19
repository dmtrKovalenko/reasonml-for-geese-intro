let add = (a, b) => a + b;

let addFloat = (a, b) => a +. b;

let addString = (a, b) => a ++ b;

let addFloatAndInt = (a, b) => addFloat(a, float_of_int(b))

Js.log(add(1, 2));
Js.log(addFloat(1., 2.2));
Js.log(addString("124", Js.Float.toString(2.2)));

let someString: string = "124123";
let someInt: int = 1124;
let someFloat: float = 1124.2;
let someBoolean: bool = true;
let someChar: char = '1'; 
let someIntAndFloatTuple: (int, float) = (1, 1.1) // [number, float]

type person = { 
  name: string,
  age: int
}

let vasiliy: person = {
  name: "Vasya",
  age: 59
}