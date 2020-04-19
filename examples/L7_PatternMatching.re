type loadingState('a) =
  | Resolved('a)
  | Rejected(int)
  | Pending
  | Idle;

let handleResult = response =>
  switch (response) {
  | Idle
  | Pending => "Loading..."
  | Rejected(401) => "It looks like you are not authorized"
  | Rejected(statusCode) when statusCode > 500 => "Oopsy, we have a problem on server side"
  | Rejected(statusCode) =>
    "An error appeared, statusCode: " ++ statusCode->string_of_int
  | Resolved(data) => "Your data is: " ++ data->Js.Float.toString
  };

Rejected(401) |> handleResult |> Js.log;

switch ("Something") {
| "Reason's pretty cool" => "Yep"
| "good night"
| "weiofjiowejf" => "See ya!"
| "hello"
| "hi"
| "heya"
| "hey" => "hello to you too!"
| _ => "Nice to meet you!"
};

switch ([Js.Math.random_int(1, 1), Js.Math.random_int(2, 2)]) {
| [1, 2] => print_endline("This is an array with item 1 and 2")
| [] => print_endline("Empty list")
| [a, ..._theRest] =>
  print_endline("list with the head value " ++ a->string_of_int)
};

switch ([1, 2, 3] |> List.find(item => item == 4)) {
| item => Js.log(item)
| exception Not_found => Js.log("No such item found!")
};

// If-else ================

let conditionIf = a =>
  if (a === 1) {
    1;
  } else {
    2;
  };

let conditionTernary = a => a === 1 ? 1 : 2;

let conditionSwitch = a =>
  switch (a) {
  | 1 => 1
  | _ => 2
  };

// Option ================

let something = Some(12);
let nothing = None;

[|"2"|]
|> Js.Array.find(a => a === "1")
|> (
  res =>
    switch (res) {
    | Some(result) => "Found result: " ++ result
    | None => "Nothing found"
    }
)
|> Js.log;
