let arr = [|1, 2, 3, 4|];
let list = [1, 2, 3, 4];

arr[10] |> Js.log

let sortNumbers = (a, b) => a - b;

let arrResult =
  arr
  |> Js.Array.sortInPlaceWith(sortNumbers)
  |> Js.Array.map(num => num + num)
  |> Js.Array.filter(num => num < 4)
  |> Js.Array.reduce((sum, num) => sum + num, 0);

let arrResultBelt =
  arr
  ->Belt.SortArray.stableSortBy(sortNumbers)
  ->Belt.Array.map(num => num + num)
  ->Belt.Array.keep(num => num < 4)
  ->Belt.Array.reduce(0, (sum, num) => sum + num);

let listResult =
  list
  |> List.sort(sortNumbers)
  |> List.map(num => num + num)
  |> List.filter(num => num < 4)
  |> (list => list->Belt.List.reduce(0, (sum, num) => sum + num));