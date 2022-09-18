const mongoose = require('mongoose');
const jwt = require("jsonwebtoken");

const UserSchema = mongoose.Schema({
    name: {type: String, required: true, unique: true, dropDups: true},
    password: {type: String, required: true},
    liked_terms: {type: Map, of: Number, default: new Map()},
    disliked_terms: {type: Map, of: Number},
    tokens: [
      {
        token: {
          type: String,
          required: true
        }
      }
    ]
  },
  {timestamps: true}
);

//gera o token de autenticação
UserSchema.methods.generateAuthToken = async function() {
  const user = this;
  const token = jwt.sign({ _id: user._id, name: user.name},
  "secret");
  user.tokens = user.tokens.concat({ token });
  await user.save();
  return token;
};

//procura por usuário com determinado name
UserSchema.statics.findByCredentials = async (name, password) => {
  const user = await User.findOne({ name });
  if (!user) {
    throw new Error({ error: "Login inválido" });
  }
  if (password != user.password) {
    throw new Error({ error: "Login inválido" });
  }
  return user;
};

const User = mongoose.model("user", UserSchema);

module.exports = {
  User
}
