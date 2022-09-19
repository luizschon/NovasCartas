const db = require("../models");
const News = db.news;
const User = db.users;
const { getRankingForQuery } = require("../models/tf-idf");

// Retorna todas as notícias paginadas 
const getNews = async (req, res) => {
  const user_id = req.query.user_id;
  // Pagina resulados da query
  const unsorted_news = await News.find({});

  if (user_id) {
    const user = await User.findById(user_id).exec();
    const sorted_news = getRankingForQuery(unsorted_news, user.liked_terms, user.disliked_terms);
    res.status(200).json(sorted_news);
  } else {
    res.status(200).json(unsorted_news);
  }
}

// Função que deleta todas as notícias do db
const deleteNews = (req, res) => {
  News.deleteMany({}, (err) => {
    if (err) res.status(500).send()
  })

  res.status(200).send()
}

module.exports = {
  getNews, deleteNews
}
