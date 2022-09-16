const bodyParser = require("body-parser");

module.exports = app => {
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));
  const users = require("../controllers/user.controller.js");
  var router = require("express").Router();
  // Cria um novo usuário
  router.post("/", users.registerUser);
  // Retorna todos os usuários
  router.get("/", users.findAll);
  // Login de um usuário
  router.post("/login", users.loginUser);
  app.use('/users', router);
};