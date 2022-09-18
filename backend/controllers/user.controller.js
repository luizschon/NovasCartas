/*
  Cria um novo usuário: object.save()
  Procura usuário pelo id: findById(id)
  Retorna todos os usuários: find()
  Atualiza usuário pelo id: findByIdAndUpdate(id, data)
  Remove um usuário: findByIdAndRemove(id)
  Remove todos os Usuários: deleteMany()
*/

const db = require("../models");
const jwt = require("jsonwebtoken");

const User = db.users;
const News = db.news;

const {
  createCorpusDictionaryAndVectorizeDocs,
  processNewsArray
} = require('../models/tf-idf')
    
    
    

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

exports.autoLoginUser = async (req, res) => {
  try {
    const token = req.body.token;
    const decodedUser = jwt.verify(token, "secret");
    res.status(200).json(decodedUser);
  } catch (err) {
    res.status(400).json({ err: "erro" });
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
exports.updatePrefs = async (req, res) => {
  const rating_up = req.body.rating_up;
  const news_id = req.body.news_id;
  const user_id = req.params.id;

  try {
    const news = await News.findById(news_id).exec();
    const { docVectors } = createCorpusDictionaryAndVectorizeDocs(processNewsArray([news]));
    console.log(docVectors[0]);
    
    const user = await User.findById(user_id).exec();

    if (rating_up) {
      // @TODO: Somar valores de chaves repetidas ao concatenar
      user.liked_terms = new Map([...user.liked_terms].concat([...docVectors[0]]));
      console.log(user.liked_terms);
    } else {
      console.log(user.disliked_terms);
    }
    user.save()
    res.status(200).send();
  } catch (err) {
    res.status(400).json({ erro: err });
  }
  
}

// Remove um usuário pelo id
exports.delete = (req, res) => {

}

// Remove todos os usuários
exports.deleteAll = (req, res) => {

}
