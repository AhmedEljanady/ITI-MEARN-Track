// function add() {
//   let [, , , name] = process.argv;
//   let data = JSON.parse(fs.readFileSync("text.json", { encodeing: "utf8" }));
//   data.push(name);
//   fs.writeFileSync("text.json", JSON.stringify(todo));
// }

//////////------------------------------------////////////////////////////////

const fs = require("fs");

let command = process.argv[2];
switch (command) {
  case "add":
    let data = [];
    let title = process.argv[3];
    const fsReadFile = fs.readFileSync("text.json", { encoding: "utf8" });
    if (!fsReadFile || fsReadFile === "[]") {
      data.push({ id: 1, title });
      fs.writeFileSync("text.json", JSON.stringify(data));
    } else {
      let data2 = JSON.parse(fsReadFile);
      let count = [...data2.keys()].length;
      data2.push({ id: count + 1, title });
      fs.writeFileSync("text.json", JSON.stringify(data2));
    }
    break;
  case "remove":
    remove();
    break;
  case "list":
    list();
    break;
  case "update":
    update();
    break;
}

function remove() {
  let data = JSON.parse(fs.readFileSync("text.json", { encoding: "utf-8" }));
  let target = process.argv[3];
  let newData = data.filter((item) => {
    return item.id != target;
  });
  //after deleting ==> update ids from target to end
  newData2 = newData.map((el, i) => {
    if (i >= target - 1) {
      el.id--;
      return el;
    } else {
      return el;
    }
  });
  fs.writeFileSync("text.json", JSON.stringify(newData2));
}

function list() {
  let data = JSON.parse(fs.readFileSync("text.json", { encoding: "utf-8" }));
  console.log(data);
}

function update() {
  let data = JSON.parse(fs.readFileSync("text.json", { encoding: "utf-8" }));
  let index = data.findIndex((item) => {
    return item.id == process.argv[3];
  });

  let targetString = data[index];
  let oldStr = targetString.title;

  let newData = data.map((item, i) => {
    if (i === index) {
      item.title = process.argv[4];
      return item;
    }
    return item;
  });
  fs.writeFileSync("text.json", JSON.stringify(newData));
}
