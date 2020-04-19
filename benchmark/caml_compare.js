const Benchmark = require("benchmark");

const Caml_obj = require("bs-platform/lib/js/caml_obj.js");
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

suite
  .add("Js.Array camp_compare", () => {x
    arr.sort(sortNumbers);
  })
  .add("Js.Array no caml_compare", () => {
    arr.sort((a, b) => a - b);
  })
  .add("Belt.Array camp_compare", () => {
    Belt_SortArray.stableSortBy(arr, sortNumbers);
  })
  .add("Belt.Array no camp_compare", () => {
    Belt_SortArray.stableSortBy(arr, (a, b) => a - b);
  })
  .on("cycle", (event) => {
    console.log(String(event.target));
  })
  .on("complete", function () {
    console.log("Fastest is " + this.filter("fastest").map("name"));
  })
  .run({ async: true });
