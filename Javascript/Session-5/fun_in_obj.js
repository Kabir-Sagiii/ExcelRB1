var obj = {
  fn: function () {
    console.log("fn is called");
  },

  fnadd: function (x, y) {
    console.log(x + y);
  },
};

obj.fn();
obj.fnadd(10, 30);
