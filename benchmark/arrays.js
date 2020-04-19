const Benchmark = require("benchmark");

const List = require("bs-platform/lib/js/list.js");
const Caml_obj = require("bs-platform/lib/js/caml_obj.js");
const Belt_List = require("bs-platform/lib/js/belt_List.js");
const Belt_Array = require("bs-platform/lib/js/belt_Array.js");
const Belt_SortArray = require("bs-platform/lib/js/belt_SortArray.js");
const Js_math = require("bs-platform/lib/js/js_math.js");

const suite = new Benchmark.Suite("arrays", {
  minSamples: 1000,
});

function sortNumbers(a, b) {
  if (Caml_obj.caml_greaterthan(a, b)) {
    return 1;
  } else if (Caml_obj.caml_lessthan(a, b)) {
    return -1;
  } else {
    return 0;
  }
}

var arr = Array(1000)
  .fill(0)
  .map((_) => Js_math.random_int(1, 1000));

var list = Belt_List.fromArray(arr);

suite
  .add("Js.Array", () => {
    arr
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
  })
  .add("Belt.Array", () => {
    Belt_Array.reduce(
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
  })
  .add("List", () => {
    var list$1 = List.filter(function (num) {
      return num < 4;
    })(
      List.map(function (num) {
        return (num + num) | 0;
      }, List.sort(sortNumbers, list))
    );

    Belt_List.reduce(list$1, 0, function (sum, num) {
      return (sum + num) | 0;
    });
  })
  .on("cycle", (event) => {
    console.log(String(event.target));
  })
  .on("complete", function () {
    console.log("Fastest is " + this.filter("fastest").map("name"));
  })
  .run({ async: true });
