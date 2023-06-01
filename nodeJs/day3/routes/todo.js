const {
  createTodo,
  deleteTodo,
  displayUserTodos,
  updateTodo,
  displayLimitedTodos,
  defaultDisplayTodos,
} = require("../controllers/todo");
const express = require("express");
const { auth } = require("../middlewares/auth");

let router = express.Router();
router.use(auth);
// user add todo ==> Done
router.post("/", async (req, res) => {
  try {
    let todo = req.body;
    todo.userID = req.userID;
    let savesTodo = await createTodo(todo);
    // Object.assign({ userID: "63efa3626afbd610a388a945", title })
    res.json(savesTodo);
  } catch (err) {
    res.json({ message: err.message });
  }
});

// delete todo ==> Done
router.delete("/:id", async (req, res) => {
  try {
    let { id } = req.params;
    let deletedTodo = await deleteTodo(id);
    res.json(deletedTodo);
  } catch (err) {
    res.json({ message: err.message });
  }
});

// edit todo ==> Done
router.patch("/:id", async (req, res) => {
  try {
    let { id } = req.params;
    let { title, status } = req.body;
    let updatedTodo = await updateTodo(id, title, status);
    res.json(updatedTodo);
  } catch (err) {
    res.json({ message: err.message });
  }
});

//BONUS ==> Done
router.get("/", async (req, res) => {
  try {
    let { limit, skip } = req.query;
    if (!skip && !limit) {
      let todos = await defaultDisplayTodos();
      res.json(todos);
    }
    let todos = await displayLimitedTodos(+limit, +skip);
    res.json(todos);
  } catch (err) {
    res.json({ message: err.message });
  }
});

module.exports = router;
