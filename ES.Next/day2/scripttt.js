const names = document.querySelector("#names");
const posts = document.querySelector("#posts");
/*
fetch("https://jsonplaceholder.typicode.com/users")
  .then((res) => res.json())
  .then((res) => drawNames(res))
  .catch((err) => console.log(err));

function drawNames(data) {
  let userNames = data
    .map((user) => {
      return `
      <button onClick='drawPosts(${user.id})'>${user.name}</button>
    `;
    })
    .join("");
  names.innerHTML = userNames;
}
drawNames();

function drawPosts(userID) {
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((res) => res.json())
    .then((res) => {
      const userPost = res
        .map((el) => {
          if (userID === el.userId) {
            return `<ul>
            <li>${el.title}</li>
          </ul>
          `;
          }
        })
        .join("");
      posts.innerHTML = userPost;
    })
    .catch((err) => console.log(err));
}
*/

async function drawNames() {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await res.json();
    let userNames = data
      .map((user) => {
        return `
      <button onClick='drawPosts(${user.id})'>${user.name}</button>
    `;
      })
      .join("");
    names.innerHTML = userNames;
  } catch (err) {
    console.log(err);
  }
}
drawNames();

async function drawPosts(userID) {
  try {
    const res = await fetch(
      `https://jsonplaceholder.typicode.com/posts?userId=${userID}`
    );
    const response = await res.json();
    const userPost = response
      .map((el) => {
        return `<ul>
              <li>${el.title}</li>
            </ul>
            `;
      })
      .join("");
    posts.innerHTML = userPost;
  } catch (err) {
    console.log(err);
  }
}

//------------------------------------//

/*
let mySet = new Set(["ahmed", "mohammed", "hassan", "ahmed"]);
console.log(mySet);
console.log(...mySet);
for (let i of mySet) {
  console.log(i);
}
*/
console.log("__________________________");

let myMap = new Map();
myMap.set("ahmed", {
  Grades: [
    { CourseName: "JavaScript", Grade: "Excellent" },
    { CourseName: "Jquery", Grade: "Good" },
    { CourseName: "CSS", Grade: "V.Good" },
  ],
});
myMap.set("khaled", {
  Grades: [
    { CourseName: "JavaScript", Grade: "Good" },
    { CourseName: "Jquery", Grade: "Fair" },
    { CourseName: "CSS", Grade: "V.Good" },
  ],
});
myMap.set("ali", {
  Grades: [
    { CourseName: "JavaScript", Grade: "Excellent" },
    { CourseName: "Jquery", Grade: "Good" },
    { CourseName: "CSS", Grade: "Excellent" },
  ],
});
myMap.forEach((value, key) => {
  console.log(`${key}'s grades:`);
  value.Grades.forEach((course) => {
    console.log(`${course.CourseName}: ${course.Grade}`);
  });
});

/*
for (let [name, grade] of myMap) {
  console.log(name + ":");

  grade.Grades.forEach((el) => {
    console.log(el.CourseName + ": " + el.Grade);
  });
  console.log("---------");
}
*/
