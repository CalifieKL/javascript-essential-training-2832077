import Measure from "./Measure.js";

class Computer {
  constructor(name, make, color, size, weight, age, status) {
    if (this.isValidInput(name)) this.name = name.toString();
    if (this.isValidInput(make)) this.make = make.toString();
    if (this.isValidInput(color)) this.color = color.toString();
    if (this.isValidMeasure(size)) this.size = size;
    if (this.isValidMeasure(weight)) this.weight = weight;
    if (this.isValidMeasure(age)) this.age = age;
    if (this.isValidInput(status))
      this.status = typeof status === "boolean" && status;
  }
  isValidInput(input) {
    return input != undefined && input != null;
  }
  isValidMeasure(measure) {
    return this.isValidInput(measure) && measure instanceof Measure;
  }
  getDescription() {
    return (
      "Computer Info: \nname: " +
      this.name +
      "\nmake: " +
      this.make +
      "\ncolor: " +
      this.color +
      "\nsize: " +
      this.size.getDescription() +
      "\nweight: " +
      this.weight.getDescription() +
      "\nage: " +
      this.age.getDescription() +
      "\nIt is " +
      (this.status ? "On" : "Off")
    );
  }
}

export default Computer;
