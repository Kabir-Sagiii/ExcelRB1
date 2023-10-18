function createPromise() {
  //create the Promise and this function should return promise

  var promiseObj = new Promise(function (resolve, reject) {
    resolve({
      ok: true,
      data: [{ name: "Kabir" }, { name: "Sagar" }],
    });
  });

  return promiseObj;
}

// var promiseObject = createPromise();

// promiseObject
//   .then(function (data) {
//     console.log(data);
//   })
//   .catch();

//createPromise().then().catch()

// createPromise()
//   .then(function (successdata) {
//     console.log(successdata);
//   })
//   .catch();

async function handlePromise() {
  var res = await createPromise();
  console.log(res);

  //   createPromise()
  //     .then(function (data) {
  //       console.log(data);
  //     })
  //     .catch(function (error) {
  //       console.log(error);
  //     });
}

handlePromise();
