export var gender = "female"; //  Named Export

export function f1() {
  //Named Export
  var city = "Noida";
  console.log(city);
}

function f2() {
  //Default Export
  console.log("f2 is called");
}

var name = "Rohan";

export default f2; //default export
