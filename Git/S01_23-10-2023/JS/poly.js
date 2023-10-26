class A {
  result;
  operation(a, b) {
    //number of parameter, type of parameter, order of parameter
    result = a + b;
  }

  operation(b, a) {
    result = a + b + c;
  }
}

class B extends A {
  res;
  operation(a, b) {
    console.log("b class");
    res = a * b;
  }
}
