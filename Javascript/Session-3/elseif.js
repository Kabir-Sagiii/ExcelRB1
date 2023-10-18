function fn(x) {
  if (x > 100 && x < 150) {
    // 208 > 100 && 208 < 150 ==> T && F==> F
    console.log("x is in between 100 and 150");
  } else if (x > 150 && x < 200) {
    console.log("x is in between 150 and 200");
  } else if (x > 200 && x < 300) {
    console.log("x is in between 200 and 300");
  } else {
    console.log("x is less then 100 or x is greater then 300");
  }
}

fn(145);
