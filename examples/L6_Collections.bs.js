import * as List from "bs-platform/lib/es6/list.js";
import * as Belt_List from "bs-platform/lib/es6/belt_List.js";
import * as Belt_Array from "bs-platform/lib/es6/belt_Array.js";
import * as Caml_array from "bs-platform/lib/es6/caml_array.js";
import * as Belt_SortArray from "bs-platform/lib/es6/belt_SortArray.js";

var arr = [1, 2, 3, 4];

var list = /* :: */ [1, /* :: */ [2, /* :: */ [3, /* :: */ [4, /* [] */ 0]]]];

console.log(Caml_array.caml_array_get(arr, 10));

function sortNumbers(a, b) {
  return (a - b) | 0;
}

var arrResult = arr
  .sort(sortNumbers)
  .map(function (num) {
    return (num + num) | 0;
  })
  .filter(function (num) {
    return num < 4;
  })
  .reduce(function (sum, num) {
    return (sum + num) | 0;
  }, 0);

var arrResultBelt = Belt_Array.reduce(
  Belt_Array.keep(
    Belt_Array.map(Belt_SortArray.stableSortBy(arr, sortNumbers), function (
      num
    ) {
      return (num + num) | 0;
    }),
    function (num) {
      return num < 4;
    }
  ),
  0,
  function (sum, num) {
    return (sum + num) | 0;
  }
);

var list$1 = List.filter(function (num) {
  return num < 4;
})(
  List.map(function (num) {
    return (num + num) | 0;
  }, List.sort(sortNumbers, list))
);

var listResult = Belt_List.reduce(list$1, 0, function (sum, num) {
  return (sum + num) | 0;
});

export { arr, list, sortNumbers, arrResult, arrResultBelt, listResult };
/*  Not a pure module */
