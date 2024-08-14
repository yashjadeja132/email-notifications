var mongoose = require("mongoose");

const enums = require("../../config/enums");

const userSchema = new mongoose.Schema(
  {
    // user name
    name: { type: String, require: true },

    // user email
    email: { type: String, unique: true, default: "" },

    // user mobile number
    number: { type: Number, unique: true, default: null },

    // user password
    password: { type: String, require: true },

    // user google provider id
    provicedId: { type: String, default: "" },

    // otp
    otp: { type: Number, default: null },

    // user role
    userRole: {
      type: String,
      enum: Object.values(enums.UserRole),
      default: enums.UserRole.USER,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

module.exports = mongoose.model("users", userSchema);
