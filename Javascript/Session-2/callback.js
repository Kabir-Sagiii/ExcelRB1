function f1(x) {
  console.log(x);
  x();
}

f1(function () {
  console.log("I am anonymous");
});
