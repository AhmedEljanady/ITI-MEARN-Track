const mongoose = require("mongoose");

let todoSchema = mongoose.Schema(
  {
    userID: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: "users",
      required: true,
    },
    title: {
      type: String,
      required: true,
      minlength: 5,
      maxlength: 20,
    },
    status: {
      type: String,
      default: "to-do",
      enum: ["to-do", "in progress", "done"],
    },
    tags: {
      type: String,
      maxlength: 10,
    },
  },
  {
    timestamps: true,
  }
);

let todoModule = mongoose.model("todo", todoSchema);

module.exports = todoModule;
