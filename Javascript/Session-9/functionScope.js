function f1() {
  var city = "Pune";
  if (true) {
    console.log(city);
  }
  function f5() {
    console.log(city);
  }
}

function f2() {
  while (true) {
    var gender = "male";
    f1();
  }
  function f3() {
    f1();
  }
}

console.log(city);
