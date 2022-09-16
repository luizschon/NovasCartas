/*
  Cria um novo usuário: object.save()
  Procura usuário pelo id: findById(id)
  Retorna todos os usuários: find()
  Atualiza usuário pelo id: findByIdAndUpdate(id, data)
  Remove um usuário: findByIdAndRemove(id)
  Remove todos os Usuários: deleteMany()
*/

const db = require("../models");
const User = db.users;

// Cria e salva um novo usuário
exports.registerUser = async (req, res) => {
  try{
    // Cria um novo usuário
    const user = new User({
      name: req.body.name,
      password: req.body.password,
    });

    // Salva o usuário no banco de dados
    const data = await user.save();
    const token = await user.generateAuthToken();
    res.status(201).send({ data,token });
  } catch (err) {
    res.status(400).json({ err: err });
  }
};

// login de um usuário
exports.loginUser = async (req, res) => {
  try {
    const name = req.body.name;
    const password = req.body.password;
    const user = await User.findByCredentials(name, password);
    if (!user) {
      return res.status(401).json({ error: "Falha na autenticação!" });
    }
    const token = await user.generateAuthToken();
    res.status(201).json({ user, token });
  } catch (err) {
    res.status(400).json({ err: "error" });
  }
};

// Retorna todos os usuários do banco de dados
exports.findAll = (req, res) => {
  const name = req.query.name;
  var condition = name ? { name: { $regex: new RegExp(name), $options: "i" } } : {};
  User.find(condition)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Ocorreu um erro ao buscar os usuários."
      });
    });
}

// Retorna um usuário pelo id
exports.findOne = (req, res) => {

}

// Atualiza um usuário pelo id
exports.update = (req, res) => {

}

// Remove um usuário pelo id
exports.delete = (req, res) => {

}

// Remove todos os usuários
exports.deleteAll = (req, res) => {

}