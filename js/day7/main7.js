let uName = document.querySelector("#name");
let pass = document.querySelector("#pass");
let check = document.querySelector("#remember");

function saveData() {
  if (check.checked) {
    localStorage.setItem("userName", uName.value);
    localStorage.setItem("password", pass.value);
  } else {
    localStorage.clear();
    // sessionStorage.setItem("userName", uName.value);
    // sessionStorage.setItem("password", pass.value);
  }
}

function getData() {
  uName.value = localStorage.getItem("userName");
  pass.value = localStorage.getItem("password");
}

//-------------------------------------//

let uNameCookies = document.querySelector("#nameCookies");
let passCookies = document.querySelector("#passCookies");
let checkCookies = document.querySelector("#rememberCookies");
let d = new Date();
d.setMonth(d.getMonth() + 1);

function saveDataCookies() {
  if (rememberCookies.checked) {
    document.cookie = `userName=${uNameCookies.value};expires=${d}`;
    document.cookie = `password=${uNameCookies.value};expires=${d}`;
  } else {
    document.cookie = `userName=;expires=`;
    document.cookie = `password=;expires=`;
  }
}

function getDataCookies() {
  let cook = document.cookie;
  let cookObj = {};

  let splitCook = cook.split(";");
  for (var i = 0; i < splitCook.length; i++) {
    var arr = splitCook[i].split("=");
    cookObj[arr[0].trim()] = arr[1];
  }
  console.log(cookObj);
}

//----------------------------------//

function searchUser() {
  let id = document.querySelector(".id");
  let user = document.querySelector(".user");
  // document.querySelector('.search')
  let xhr = new XMLHttpRequest();
  xhr.open("GET", "https://reqres.in/api/users/" + id.value);
  xhr.send();
  xhr.addEventListener("readystatechange", function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
      let data = JSON.parse(xhr.response);
      let fname, lname, avatar;
      fname = data.data.first_name;
      lname = data.data.last_name;
      avatar = data.data.avatar;
      user.innerHTML = `      <p>First Name: <b>${fname}</b></p>
      <p>Last Name: <b>${lname}</b></p>
      <img src="${avatar}" alt="" />`;
    }
  });
}
function displayUsers() {
  // let id = document.querySelector(".id");
  let user = document.querySelector(".user");
  // document.querySelector('.search')
  let xhr = new XMLHttpRequest();
  xhr.open("GET", "https://reqres.in/api/users/");
  xhr.send();
  xhr.addEventListener("readystatechange", function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
      let data = JSON.parse(xhr.response);
      for (let i = 0; i < data.data.length; i++) {
        user.insertAdjacentHTML(
          "beforeend",
          `      <p>First Name: <b>${data.data[i].first_name}</b></p>
        <p>Last Name: <b>${data.data[i].last_name}</b></p>
        <img src="${data.data[i].avatar}"/>`
        );
      }
    }
  });
}

let select = document.querySelector("select");
let user = document.querySelector(".user");
let xhr = new XMLHttpRequest();
xhr.open("GET", "https://reqres.in/api/users/");
xhr.send();
xhr.addEventListener("readystatechange", function () {
  if (xhr.readyState === 4 && xhr.status === 200) {
    let data = JSON.parse(xhr.response);
    for (let i = 0; i < data.data.length; i++) {
      select.innerHTML += `<option value="${data.data[i].first_name}">${data.data[i].first_name}</option>`;
    }
  }
});

function selecthUser() {
  let userSelected = select.options[select.selectedIndex].value;
  let data = JSON.parse(xhr.response);

  for (let i = 0; i < data.data.length; i++) {
    if (userSelected === data.data[i].first_name) {
      user.innerHTML = `      <p>First Name: <b>${data.data[i].first_name}</b></p>
              <p>Last Name: <b>${data.data[i].last_name}</b></p>
              <img src="${data.data[i].avatar}"/>`;
    }
  }
}
