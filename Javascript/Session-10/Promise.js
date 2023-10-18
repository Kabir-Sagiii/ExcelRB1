// var promise = new Promise(function (resolve, reject) {});

// console.log(promise);

//Resolve State

// var promiseObj = new Promise(function (resolve, reject) {
//   resolve(["cdskn", 100, true]);//success data
// });

// console.log(promiseObj);

//Rejected State
var promiseObj = new Promise(function (resolve, reject) {
  resolve("vfdkjvfkjd");
  reject({ error: "Failed to connect with database" }); //error data
});

console.log(promiseObj);
