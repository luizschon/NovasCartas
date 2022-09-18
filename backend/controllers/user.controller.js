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
const { updateNewsIdArrayAndTerms } = require('../utils/map');

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
    res.status(200).json(await User.findById(decodedUser._id));
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
    // Recebe notícia do banco de dados a partir do id e cria Map com frenquência dos termos
    const news = await News.findById(news_id).exec();
    const { docVectors } = createCorpusDictionaryAndVectorizeDocs(processNewsArray([news]));
    
    // Recebe dados do usuário logado para atualizar
    const user = await User.findById(user_id).exec();

    if (rating_up) {
      /* Caso o usuário tenha dado like na notícia, primeiro checa se o usuário previamente
       * deu dislike na notícia e remove da lista de notícias com dislike antes de atualizar
       * a lista de notícias com like. Caso contrário, atualiza lista de notícias com likes. */
      if (user.disliked_news.includes(news_id)) {
        user.disliked_news = updateNewsIdArrayAndTerms(news_id, user.disliked_news, user.disliked_terms, docVectors[0]);
      }
      user.liked_news = updateNewsIdArrayAndTerms(news_id, user.liked_news, user.liked_terms, docVectors[0]);
    } else {
      /* Caso o usuário tenha dado dislike na notícia, primeiro checa se o usuário previamente
       * deu like na notícia e remove da lista de notícias com like antes de atualizar
       * a lista de notícias com dislike. Caso contrário, atualiza lista de notícias com dislikes. */
      if (user.liked_news.includes(news_id)) {
        user.liked_news = updateNewsIdArrayAndTerms(news_id, user.liked_news, user.liked_terms, docVectors[0]);
      }
      user.disliked_news = updateNewsIdArrayAndTerms(news_id, user.disliked_news, user.disliked_terms, docVectors[0]);
    }
    user.save()
    res.status(200).json(user);
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
