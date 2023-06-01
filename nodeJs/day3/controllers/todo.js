const todoModel = require("../models/todo");

function createTodo(todo) {
  return todoModel.create(todo);
}

function deleteTodo(id) {
  return todoModel.findByIdAndDelete({ _id: id });
}

function displayUserTodos(id) {
  return todoModel.find({ userID: id }).populate("UserID");
}

function findTodo(id) {
  return todoModel.findById({ _id: id });
}

async function updateTodo(id, title, status) {
  let targetTodo = await findTodo(id);
  if (title) targetTodo.title = title;
  if (status) targetTodo.status = status;
  if (title || status) {
    let date = new Date();
    targetTodo.updatedAt = date.toJSON();
  }
  return todoModel.findByIdAndUpdate(id, targetTodo, { new: true });
}

function defaultDisplayTodos() {
  return todoModel.aggregate([{ $match: {} }, { $limit: 10 }]);
}
function displayLimitedTodos(limit, skip) {
  return todoModel.aggregate([
    { $match: {} },
    { $limit: limit },
    { $skip: skip },
  ]);
}

module.exports = {
  createTodo,
  deleteTodo,
  displayUserTodos,
  findTodo,
  defaultDisplayTodos,
  displayLimitedTodos,
  updateTodo,
};
