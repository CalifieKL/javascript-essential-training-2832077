/**
 * Practice: Making classes and objects
 *
 * - Find a type of object you have more than one of in your house (eg. clothing, writing tools, etc).
 * - Create a class describing this object type - its properties and methods.
 * - Create several objects using the class.
 * - Test the objecs by calling their properties and using their methods in the console.
 */
class Measure {
  constructor(size, unit) {
    if (isNaN(size) && size < 0) return;
    if (!(typeof unit === "string")) return;
    this.size = size;
    this.unit = unit.trim();
  }
  setSize(size) {
    if (isNaN(size) && size < 0) return;
    this.size = size;
  }
  getSize() {
    return this.size;
  }
  setUnit(unit) {
    if (!(typeof unit === "string")) return;
    this.unit = unit.trim();
  }
  getUnit() {
    return this.unit;
  }
  getDescription() {
    if (
      this.size == null ||
      this.size == undefined ||
      this.unit == undefined ||
      this.unit == null
    )
      return "";
    return this.size.toString() + " " + this.unit + (this.size > 1 ? "s" : "");
  }
}

export default Measure;
