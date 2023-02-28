/**
 * Practice: Making methods
 *
 * - Create a method for each object property.
 * - The method receives a value to match the property to be changed.
 * - Create a simple function to replace the current property value with the received value.
 * - Test the method by sending new values and checking the properties in the console.
 */

const backpack = {
  name: "Everyday Backpack",
  volume: 30,
  color: "grey",
  pocketNum: 15,
  strapLength: {
    left: 26,
    right: 26,
  },
  toggleLid: function (lidStatus) {
    this.lidOpen = lidStatus;
  },
  changeName: function (newName) {
    this.name = newName;
  },
  modifyVolume: function (newVolume) {
    this.volume = newVolume;
  },
  changeColor: function (newColor) {
    this.color = newColor;
  },
  modifyPocketNum: function (newPocketNum) {
    this.pocketNum = newPocketNum;
  },
  newStrapLength: function (lengthLeft, lengthRight) {
    this.strapLength.left = lengthLeft;
    this.strapLength.right = lengthRight;
  },
  getDescription: function () {
    return JSON.stringify(this);
  },
};
function updateName() {
  backpack.changeName(document.getElementById("packetName").value);
  alert("name is now " + backpack.name.toString());
  console.log(backpack.getDescription());
}
function updateVolume() {
  backpack.modifyVolume(document.getElementById("packetVolume").value);
  alert("volume is now " + backpack.volume.toString());
  console.log(backpack.getDescription());
}
function updateColor() {
  backpack.changeColor(document.getElementById("packetColor").value);
  alert("color is now " + backpack.color.toString());
  console.log(backpack.getDescription());
}
function updatePocketNum() {
  backpack.modifyPocketNum(document.getElementById("packetPocketNum").value);
  alert("pocket number is now " + backpack.pocketNum.toString());
  console.log(backpack.getDescription());
}
