function fn() {
  console.log("I am callback");
}

function f1(x) {
  x();
}

f1(fn);
