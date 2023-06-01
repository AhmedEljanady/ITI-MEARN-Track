const userModel = require("../models/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
// const todoModel = require("../models/todo");

function createUser(user) {
  return userModel.create(user);
}

function displayUsers() {
  return userModel.find({});
}

function deleteUser(id) {
  return userModel.deleteOne({ _id: id });
}

function findUser(id) {
  return userModel.findOne({ _id: id });
}

// let { firstName, lastName, password } = targetUser;
async function updateUser(id, fName, lName, pass) {
  let targetUser = await findUser(id);
  if (fName) targetUser.firstName = fName;
  if (lName) targetUser.lastName = lName;
  if (pass) targetUser.password = pass;
  if (fName || lName || pass) {
    let date = new Date();
    targetUser.updatedAt = date.toJSON();
  }
  return userModel.findOneAndUpdate({ _id: id }, targetUser, { new: true });
}

async function login(req, res) {
  let { userName, password } = req.body;
  let user = await userModel.findOne({ userName });
  if (user) {
    let valid = bcrypt.compareSync(password, user.password);
    if (valid) {
      let token = jwt.sign(
        {
          userID: user._id,
          userName: user.userName,
        },
        process.env.SECRET,
        { expiresIn: "5d" }
      );
      res.json(token);
    } else {
      res.status(401).json({ message: "invalid userName or password" });
    }
  } else {
    res.end();
  }
}

// function updateUser(id, user) {
//   return userModel.updateOne({ _id: id }, { user });
// }

// function displayUserTodos(id){
//   let user = findUser(id)
//   return
// }

module.exports = {
  createUser,
  displayUsers,
  deleteUser,
  findUser,
  updateUser,
  login,
};
