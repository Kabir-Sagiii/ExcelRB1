class A {
  name;
  city;

  constructor(name, city) {
    (this.name = name), (this.city = city);
  }

  display() {
    console.log(this.name, this.city);
  }
}

var a1 = new A("Raj", "Pune");

a1.id = 101;
// a1.state = "mh";

a1.__proto__.state = "MH"; //  a1 = {name:"",city:"",__proto__:{state:"MH"}}

var a2 = new A("Rohan", "Mumbai"); //a2={name:"",city:"",__proto__:{state:"MH"}}
// a2.state = "mh";

a2.__proto__.fn = function () {
  console.log("fn is called");
};

// console.log(a1.name, a1.city); //

// console.log(a2.name, a2.city); //

// console.log(a1.id, a2.id); //101
console.log(a1.state);
console.log(a2.state);

a2.fn();
a1.fn();

class B {}

var b1 = new B();
