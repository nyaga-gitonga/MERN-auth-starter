const { Schema, model } = require("mongoose");

const UserSchema = new Schema(
  {
    name: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true
    },
    password: {
      type: String,
      required: true
    },
    emailVerified: {
      type: Boolean,
      default: false
    }
  },
  { timestamps: true }
);

const User = model("User", UserSchema);

module.exports = User;
