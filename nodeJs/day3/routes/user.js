const express = require("express");

const {
  createUser,
  displayUsers,
  deleteUser,
  updateUser,
  login,
} = require("../controllers/user");
const { displayUserTodos } = require("../controllers/todo");
let router = express.Router();

// add new user  ==> Done
router.post("/", async (req, res) => {
  let user = req.body;
  try {
    let savedUser = await createUser(user);
    res.json(savedUser);
  } catch (err) {
    res.json({ message: err.message });
  }
});

// display all users ==> Done
router.get("/", async (req, res) => {
  try {
    let users = await displayUsers();
    res.json(users);
  } catch (err) {
    res.json({ message: err.message });
  }
});

// delete user ==> Done
router.delete("/:id", async (req, res) => {
  try {
    let { id } = req.params;
    let deletedUser = await deleteUser(id);
    res.json(deletedUser);
  } catch (err) {
    res.json({ message: err.message });
  }
});

// // edit user ==> Done
router.patch("/:id", async (req, res) => {
  try {
    let { id } = req.params;
    let { lastName, firstName, password } = req.body;
    let updatedUser = await updateUser(id, firstName, lastName, password);
    res.json(updatedUser);
  } catch (err) {
    res.json({ message: err.message });
  }
});

//BONUS  get user's todo ==> Done
router.get("/:id/todos", async (req, res) => {
  try {
    let { id } = req.params;
    let userTodos = await displayUserTodos(id);
    res.json(userTodos);
  } catch (err) {
    res.json({ message: err.message });
  }
});

router.post("/login", login);

module.exports = router;
