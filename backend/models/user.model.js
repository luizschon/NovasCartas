const mongoose = require("mongoose")

const UserSchema = mongoose.Schema({
    name: { type: String, unique: true, required: true, dropDups: true },
    password: { type: String, required: true},
  },
  { timestamps: true }
)

const Users = mongoose.model("user", UserSchema);
module.exports = { Users }
