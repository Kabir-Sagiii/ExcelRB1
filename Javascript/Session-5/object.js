var data = {
  id: 101,
  name: "Rohan",
  city: "Delhi",
  state: {
    area1: "a1",
    area2: "a2",
  },
};

// console.log(data);

// //How to access the Specific Property value from object
// // . Operator  or [] notation

// // objectname.keyname
// console.log(data.city);

// console.log(data["name"]);

//When to use . operator and [] notation.

//how to insert new property dynamically in the object
// objectname.<new keyname> = "<new value>"

// console.log(data);

// data.email = "Rohan@gmail.com";
// data["state"] = "Delhi";

// console.log(data);

//How to update value of any specific  property in the object

//<objectname>.<keyname> = <updated value>

// data.name = "Rohan Verma";
// data.city = "Pune";

// console.log(data);

//How to delete or remove property from the object

// delete <objectname>.<keyname>

// delete data.id;
// delete data.name;

// console.log(data);
