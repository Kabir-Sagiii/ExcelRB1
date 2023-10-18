var data = [200, 300, 500, 433, 578, 922, 100];

var newarray = data.map(function (element, index) {
  var value = element + 100;
  return value;
});

console.log(newarray);
