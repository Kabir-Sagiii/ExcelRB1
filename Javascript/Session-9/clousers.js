// var city = "delhi";
// function fn() {
//   console.log("fn is called", city);
// }

// function f1() {
//   console.log("f1 is called", city);
// }

// function f2() {
//   console.log("f2 is called", city);
//   city = "Hyderabad";
// }
// f2();
// fn();
// f1();

function fn() {
  var city = "delhi";
  console.log("fn is called", city);

  function f1() {
    console.log("f1 is called", city);
  }

  f1();
}

function f2() {
  console.log("f2 is called");
  city = "hyd";
}
f2();
fn();
