/**
 * Practice: Building objects
 *
 * - Create JavaScript objects based on objects in your current environment.
 * - Give each object an identifiable name.
 * - Create properties to describe the objects and set their values.
 * - Find an object that has another object inside of it to create a nested object.
 * - Test your objects in the browser console by accessing the entire object and its specific properties.
 */
const main = document.createElement("main");
document.body.appendChild(main);
function getDescription(measure, unit) {
  if (
    measure == null ||
    measure == undefined ||
    unit == null ||
    unit == undefined
  )
    return "";
  return measure.toString() + " " + unit.toString() + "s";
}

const computerMine = {
  name: "Computer Mine",
  make: "ASUS",
  color: "indigo blue",
  size: {
    measure: 13,
    unit: "inch",
  },
  weight: {
    measure: 450,
    unit: "gram",
  },
  age: {
    measure: 4,
    unit: "year",
  },
  powerOn: false,
  switchOnOff: function () {
    this.powerOn = !this.powerOn;
    this.alertStatus();
    console.log(this.powerOn);
  },
  alertStatus: function () {
    return alert("It is " + (this.powerOn ? "on" : "off") + "!");
  },
  getSizeString: function () {
    return getDescription(this.size.measure, this.size.unit);
  },
  getWeightString: function () {
    return getDescription(this.weight.measure, this.weight.unit);
  },
  getAgeString: function () {
    return getDescription(this.age.measure, this.age.unit);
  },
  getDescription: function () {
    return (
      "this computer is " +
      this.getSizeString() +
      " in size " +
      this.getWeightString() +
      " in weight and it is " +
      this.getAgeString() +
      " old!"
    );
  },
};

const markup = (computer) => {
  return `
    <div>
      <h3>${computer.name} : ${computer.make}</h3>
    </div>
    <div>
      <p>${computer.getDescription()}</p>
    </div>
    <div>
      <button onclick="alert('Hello world!')">Feeling curious?</button>
    </div>
    `;
};

main.innerHTML = markup(computerMine);
document.body.appendChild(main);
