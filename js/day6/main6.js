//------------------------//
//--------task 1----------//
//------------------------//
var images = [
  "SlideShow/1.jpg",
  "SlideShow/2.jpg",
  "SlideShow/3.jpg",
  "SlideShow/4.jpg",
  "SlideShow/5.jpg",
  "SlideShow/6.jpg",
];
let img = document.images[0];
var i = 0;
var imagesInterval;
document.querySelector(".slide").addEventListener("click", function () {
  imagesInterval = setInterval(function () {
    i++;
    if (i > images.length - 1) {
      i = 0;
    }
    img.src = images[i];
  }, 1000);
});

document.querySelector(".stop").addEventListener("click", function () {
  clearInterval(imagesInterval);
});

document.querySelector(".next").addEventListener("click", function () {
  i++;
  if (i > images.length - 1) {
    img.src = images[images.length - 1];
    i = images.length - 1;
  } else {
    img.src = images[i];
  }
});
document.querySelector(".prev").addEventListener("click", function () {
  i--;
  if (i < 0) {
    img.src = images[0];
    i = 0;
  } else {
    img.src = images[i];
  }
});
//------------------------//
//--------task 2----------//
//------------------------//
function preventCharacters(e) {
  var regex = /^[0-9]+$/;
  var regex2 = /^Backspace$/;
  if (!regex.test(e.key) && !regex2.test(e.key)) {
    e.preventDefault();
  }
  console.log(e.key);
}
//------------------------//
//--------task 3----------//
//------------------------//
let fname = document.querySelector(".input0");
let age = document.querySelector(".input1");
let email = document.querySelector(".input2");

let add = function () {
  document.querySelector("table").insertAdjacentHTML(
    "beforeend",
    `
      <tr>
        <td>${fname.value}</td>
        <td>${age.value}</td>
        <td>${email.value}</td>
      </tr>
    `
  );
  document.querySelector(".warning").innerHTML = "";
  fname.value = age.value = email.value = "";
};

function test(e) {
  if (!fname.value || !age.value || !email.value) {
    document.querySelector(".warning").textContent = "invalid input!!";
    e.preventDefault();
  } else {
    add();
    e.preventDefault();
  }
}

// reset
let table = document.querySelector("table");
document.querySelector(".reset").addEventListener("click", function () {
  let n = table.tBodies.length;
  for (let i = n - 1; i > 0; i--) {
    table.removeChild(table.tBodies[i]);
  }
});
