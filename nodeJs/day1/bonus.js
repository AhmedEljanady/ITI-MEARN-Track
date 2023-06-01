const fs = require("fs");

let command = process.argv[2];
switch (command) {
  case "add":
    add();
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

function add() {
  let data = [];
  let name = process.argv[3];
  const fsReadFile = fs.readFileSync("bonus.json", { encoding: "utf8" });
  if (!fsReadFile || fsReadFile === "[]") {
    data.push(`{id:1,${name},status:to-do}`);
    fs.writeFileSync("bonus.json", JSON.stringify(data));
  } else {
    let data2 = JSON.parse(fsReadFile);
    let count = [...data2.keys()].length;
    data2.push(`{id:${count + 1},${name},status:to-do}`);
    fs.writeFileSync("bonus.json", JSON.stringify(data2));
  }
}

function remove() {
  let data = JSON.parse(fs.readFileSync("bonus.json", { encoding: "utf8" }));
  let target = process.argv[3];
  let newData = data.filter((item) => {
    return item.includes(`id:${target}`) === false;
  });

  //after deleting ==> update ids from target to end
  newData2 = newData.map((el, i) => {
    if (i >= target - 1) {
      return el.replace(`id:${i + 2}`, `id:${i + 1}`);
    } else {
      return el;
    }
  });
  fs.writeFileSync("bonus.json", JSON.stringify(newData2));
}

function list() {
  let data = JSON.parse(fs.readFileSync("bonus.json", { encoding: "utf8" }));
  let [, , , flag, status] = process.argv;
  if (flag) {
    let list = data.filter((item) => {
      return item.split(",")[2].includes(status);
    });
    console.log(list);
  } else {
    console.log(data);
  }
}

function update() {
  let data = JSON.parse(fs.readFileSync("bonus.json", { encoding: "utf8" }));
  let index = data.findIndex((item) => {
    return item.includes(`id:${process.argv[3]}`) === true;
  });
  let targetString = data[index];
  let oldTitle = targetString.split(",")[1].split(":")[1];
  let oldStatus1 = targetString.split(",")[2].split(":")[1];
  let oldStatus = oldStatus1.slice(0, oldStatus1.length - 1); //go to
  console.log(oldTitle, oldStatus);
  let [, , , , f4, t5, f6, t7] = process.argv;
  if (!f6) {
    if (f4 === "-t") {
      let newData = data.map((item, i) =>
        i === index ? item.replace(oldTitle, t5) : item
      );
      fs.writeFileSync("bonus.json", JSON.stringify(newData));
    } else if (f4 === "-s") {
      let newData = data.map((item, i) =>
        i === index ? item.replace(oldStatus, t5) : item
      );
      fs.writeFileSync("bonus.json", JSON.stringify(newData));
    }
  } else {
    if (f4 === "-t" && f6 === "-s") {
      let newData = data.map((item, i) =>
        i === index ? item.replace(oldStatus, t7).replace(oldTitle, t5) : item
      );
      fs.writeFileSync("bonus.json", JSON.stringify(newData));
    } else if (f4 === "-s" && f6 === "-t") {
      let newData = data.map((item, i) =>
        i === index ? item.replace(oldStatus, t5).replace(oldTitle, t7) : item
      );
      fs.writeFileSync("bonus.json", JSON.stringify(newData));
    }
  }
}
