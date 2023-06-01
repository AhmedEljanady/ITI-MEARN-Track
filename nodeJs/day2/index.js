// const validator = require("validator");
// console.log(validator.isEmail("ahmed@mail.com"));

const express = require("express");
const fs = require("fs");
const app = express();

app.use(express.json());
app.use((_req, _res, next) => {
  console.log("middleware function run");
  next();
});

// read all
app.get("/todo", (req, res) => {
  let data = JSON.parse(fs.readFileSync("file.json", { encoding: "utf-8" }));
  let { limit, skip } = req.query;
  if (!skip && !limit) {
    let newData = data.filter((el) => {
      return el.id <= "10";
    });
    return res.send(newData);
  }
  let newData = data
    .filter((_el, i) => {
      return i >= skip;
    })
    .filter((_el, i) => {
      return i < limit;
    });
  res.send(newData);
});

//read with id
app.get("/todo/:id", (req, res) => {
  let data = JSON.parse(fs.readFileSync("file.json", { encoding: "utf-8" }));
  let id = req.params.id;
  let targetTodo = data.find((el) => {
    return el.id === +id;
  });
  res.send(targetTodo);
});

//add todo
app.post("/todo", (req, res) => {
  let data = JSON.parse(fs.readFileSync("file.json", { encoding: "utf-8" }));
  let { title, status } = req.body;
  if (!data || data == "[]") {
    data.push({ id: 1, title, status });
  } else {
    let count = [...data.keys()].length;
    data.push({ id: count + 1, title, status });
  }
  fs.writeFileSync("file.json", JSON.stringify(data));
  res.json(req.body);
});

// update todo
app.patch("/todo/:id", (req, _res) => {
  let data = JSON.parse(fs.readFileSync("file.json", { encoding: "utf-8" }));
  let id = req.params.id;
  let targetTodo = data.find((el) => {
    return el.id === +id;
  });
  let { title } = req.body;
  targetTodo.title = title;
  fs.writeFileSync("file.json", JSON.stringify(data));
});

// remove todo
app.delete("/todo/:id", (req, _res) => {
  let data = JSON.parse(fs.readFileSync("file.json", { encoding: "utf-8" }));
  let id = req.params.id;
  let targetTodos = data
    .filter((el) => {
      return el.id !== +id;
    })
    .map((el, i) => {
      el.id = i + 1;
      return el;
    });
  fs.writeFileSync("file.json", JSON.stringify(targetTodos));
});
app.listen(3000);
