var obj1 = {
  c: 100,
};

var obj2 = {
  c: 500,
};

function fnAdd(a, b) {
  //   console.log(a + b + this.c); // window.c  //nan
  console.log(this);
  var result = a + b;
  console.log(result);
}

fnAdd(10, 20); // c = obj1

fnAdd(100, 200); // c = obj2
