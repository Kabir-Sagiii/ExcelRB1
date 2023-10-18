function findevenodd(x) {
  if (x % 2 == 0) {
    console.log(x, "is a even number");
  } else {
    console.log(x, "is a odd number");
  }
}

function findLargest(x, y) {
  if (x > y) {
    console.log(x, "is Largest number");
  } else {
    console.log(y, "is Largest number");
  }
}

findLargest(500, 300);

findevenodd(108);
