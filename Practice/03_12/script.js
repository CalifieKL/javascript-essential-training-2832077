import Measure from "./Measure.js";
import Computer from "./Computer.js";

const weight = new Measure(450, "gram");
console.log(weight.getDescription());
const age = new Measure(7, "   year    ");
console.log(age.getDescription());
const size = new Measure(13, "inch     ");
console.log(size.getDescription());

var status = "test";

const myComputer = new Computer(
  "myComputer",
  "ASUS",
  "blue",
  size,
  weight,
  age,
  status
);
console.log(myComputer.getDescription() + "\n--------------");
status = true;
myComputer.status = status;
console.log(myComputer.getDescription());
