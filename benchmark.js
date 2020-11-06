const Benchmark = require('benchmark');
const factIterative = require("./fact");
const factRecursive = require("./fact");

const suite = new Benchmark.Suite();
suite.add("fact recursive", function () {
    factRecursive(500)
});
suite.add("fact iterative ", function () {
    factIterative(500)
});


suite.on("cycle", function (event) {
    console.log(String(event.target));
});
suite.on("complete", function () {
    console.log("Fastest is " + this.filter("fastest").map("name"));
})
suite.run()
