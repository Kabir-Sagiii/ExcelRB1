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
var a1 = new A();

var a2 = new A();

class B extends A {
  id;
  email;
  constructor(id, email, name, city) {
    super(name, city);
    this.id = id;
    this.email = email;
  }

  print() {
    console.log(this.id, this.email);
  }
}

var b1 = new B(101, "b@gmail.com", "aName", "aCity");
var a1 = new A("Raj", "Rohan");

b1.display();
b1.print();

a1.display();
a1.print();
