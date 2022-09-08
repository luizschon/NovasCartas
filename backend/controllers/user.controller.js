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
exports.create = (req, res) => {
  // Valida a requisição
  if (!req.body.name) {
    res.status(400).send({ message: "O nome não pode ser vazio!" });
    return;
  }

  // Cria um novo usuário
  const user = new User({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
  });

  // Salva o usuário no banco de dados
  user
    .save(user)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Ocorreu um erro ao criar o usuário."
      });
    });
};

// Retorna todos os usuários do banco de dados
exports.findAll = (req, res) => {
  const email = req.query.email;
  var condition = email ? { email: { $regex: new RegExp(email), $options: "i" } } : {};
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

// Retorna todos os usuários ativos
exports.findAllActive = (req, res) => {

}

