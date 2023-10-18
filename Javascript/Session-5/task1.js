var arr = [20, 30, 40, 50, 60, 70];
var newarray = [];

arr.forEach(function (element) {
  var ele = element * 10;
  newarray.push(ele);
});

console.log(newarray);
