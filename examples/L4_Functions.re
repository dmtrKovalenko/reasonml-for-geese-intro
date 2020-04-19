let add = (a, b) => a + b;
let subtract = (a, b) => {
  a - b ;
};

// let add = (a) => (b) => a + b
let addOne = add(1);
let result = addOne(Js.Math.random_int(1, 12));

let resultPipe = 2 |> add(1);
let resultPipeFirst = 1->add(2);

2.2
|> int_of_float
|> subtract(1)
|> add(2)
|> subtract(3)
|> add(4)
|> Js.log

// Labled arguments

let getLocationByCoords = (x, y) => Js.log(x + y);
getLocationByCoords(1, 2);

let getLocationByCoordsNice = (~x, ~y) => Js.log(x + y);
getLocationByCoordsNice(~y=2,~x=1);