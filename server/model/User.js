
const mongoose = require('mongoose');

const UserInfo = new  mongoose.Schema(
  {
    user_id: { type: String, required: true, unique: true },
    name: { type: String, required: true },
    email: { type: String, unique: true },
    password: { type: String, required: true },
  },
  {
    collection: "User",
    timestamps: true,
  }
);
module.exports = mongoose.model('User', UserInfo);

