//If you are not defining or declaring any variable or function
//inside any block then they are said to be in global scope.

// Global scope Variables or function can be accessible anywhere in the file

var name = "Kabir";

function f1() {
  var city = "Pune";
  if (true) {
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

f1();
