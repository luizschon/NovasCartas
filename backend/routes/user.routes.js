const router = require('express').Router();
const users = require("../controllers/user.controller.js");

// Retorna todos os usuários
router.get("/", users.findAll);

// Cria um novo usuário
router.post("/", users.registerUser);

// Login de um usuário
router.post("/login", users.loginUser);

module.exports = router;
