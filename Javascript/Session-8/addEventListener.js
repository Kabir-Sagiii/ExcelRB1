function pStyles() {
  var pRef = document.getElementById("p1");
  pRef.style.backgroundColor = "black";
  pRef.style.padding = "30px";
  pRef.style.color = "white";
}

function pmouseleaveStyle() {
  var pRef = document.getElementById("p1");
  pRef.style.backgroundColor = "red";
  pRef.style.padding = "30px";
  pRef.style.color = "black";
}

function fnAddEvent() {
  var btnRef = document.getElementById("btn");
  var pRef = document.getElementById("p1");

  pRef.addEventListener("mouseenter", pStyles);

  pRef.addEventListener("mouseleave", pmouseleaveStyle);

  btnRef.addEventListener("click", function () {
    btnRef.style.color = "red";
    btnRef.innerText = "Content Got Changed";
  });

  //
}

function fnRemoveEvent() {
  var p1Ref = document.getElementById("p1");
  p1Ref.removeEventListener("mouseenter", pStyles);
  p1Ref.removeEventListener("mouseleave", pmouseleaveStyle);
}
