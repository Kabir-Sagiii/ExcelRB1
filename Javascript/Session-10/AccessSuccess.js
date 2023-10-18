var promiseObj = new Promise(function (resolve, reject) {
  //   resolve("Kabir");
  reject("Sagar");
});

//promiseObj.then().catch()

//promiseObj.then(function(successdata){}).catch()

//promiseObj.then(function(successdata){}).catch(function(errordata){})

promiseObj
  .then(function (successdata) {
    console.log("then------", successdata);
  })
  .catch(function (errordata) {
    console.log("catch----", errordata);
  });
