var data = [20, 30, 40, 50, 60, 45, 21, 31, 98, 99, 71, 20, 34];

// var filteredData = data.filter(function (element, index) {
//   return element > 40;
// });

// console.log(filteredData);

//Print the elements which are in between 40 to 80

var newdata = data.filter(function (element, index) {
  return element > 40 && element < 80; //T && T ==> T
});

console.log(newdata);
