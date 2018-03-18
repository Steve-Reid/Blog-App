const mongoose = require("mongoose");

const User = mongoose.model("User");

module.exports = () => {
  return new User({}).save();
}; // currently not using googleid or displayName, hence {}
