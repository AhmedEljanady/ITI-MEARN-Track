let div1 = document.querySelector(".div1");
let marbs = document.querySelectorAll(".img");

let i = 0;
let imgInterv;
let changeImg = function () {
  imgInterv = setInterval(() => {
    marbs[i].setAttribute("src", "marbels/marble1.jpg");
    setTimeout(function () {
      marbs[i].setAttribute("src", "marbels/marble3.jpg");
    }, 1000);
    i++;
    i === 5 ? (i = 0) : (i = i);
  }, 1000);
};
changeImg();
div1.addEventListener("mouseover", () => {
  clearInterval(imgInterv);
});
div1.addEventListener("mouseout", () => {
  changeImg();
});

// div1.addEventListener("mouseleave", () => {
//   let imgInterv2 = setInterval(() => {
//     marbs[i].setAttribute("src", "marbels/marble1.jpg");
//     setTimeout(function () {
//       marbs[i].setAttribute("src", "marbels/marble3.jpg");
//     }, 1000);
//     i++;
//     i === 5 ? (i = 0) : (i = i);
//   }, 1000);
// });

//-------------------------------------------//

function changeOpacity(e) {
  e.style.opacity = 1;
}
function increaseOpacity(e) {
  e.style.opacity = 0.3;
}

// function changeOpacity(e, con) {
//   if (e !== con) {
//     e.style.opacity = 1;
//   }
// }
// function increaseOpacity(e, con) {
//   if (e !== con) {
//     e.style.opacity = 0.3;
//   }
// }
