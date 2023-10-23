var obj1 = {
  // new Object()
  //city = "Delhi"
  name: "Sagar",
  email: "Sagar@gmail.com",
};

var obj2 = {
  //Literal Notation of creating the Object : Class Object
  //city = "Delhi //7"
  name: "Ziya",
  email: "Ziya@gmail.com",
};
// obj1.city = "Delhi";
// obj2.city = "Delhi";

obj1.__proto__.city = "Delhi";

console.log(obj1.city);
console.log(obj2.city);
