function f1() {
  //   var h2Reference = document.getElementById("title");
  //   var pReference = document.getElementById("para");
  //   var imgRef = document.getElementById("image");

  var h2Reference = document.querySelector("#title");
  var pReference = document.querySelector("#para");
  var imgRef = document.querySelector("#image");

  h2Reference.innerText = "Javascript Title";
  h2Reference.style.color = "green";
  h2Reference.style.backgroundColor = "black";
  h2Reference.style.padding = "50px";

  pReference.innerText = "Javascript is a Programming Language";
  imgRef.src =
    "https://www.tutorialrepublic.com/lib/images/javascript-illustration.png";
  imgRef.width = "800";

  for (var key in h2Reference.style) {
    console.log(key);
  }
}

// function f1() {
//   var x = 100;

//   var y = 200;
//   console.log(x + y);
// }
