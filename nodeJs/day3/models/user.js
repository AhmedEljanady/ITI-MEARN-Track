const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

let userSchema = mongoose.Schema(
  {
    userName: {
      type: String,
      required: true,
      unique: true,
      minlength: 8,
    },
    password: {
      type: String,
      required: true,
    },
    firstName: {
      type: String,
      required: true,
      minlength: 3,
      maxlength: 15,
    },
    lastName: {
      type: String,
      required: true,
      minlength: 3,
      maxlength: 15,
    },
    dob: {
      type: Date,
      default: Date.now,
    },
  },
  { timestamps: true }
);

userSchema.pre("save", function (next) {
  let salt = bcrypt.genSaltSync(5);
  let hashedPass = bcrypt.hashSync(this.password, salt);
  this.password = hashedPass;
  next();
});

let userModule = new mongoose.model("user", userSchema);

module.exports = userModule;
