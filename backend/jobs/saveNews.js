const express = require('express');
const { getNews } = require('../models/news.model.js')
const { News } = require('../models/news.model.js')

const router = express.Router();

router.get("/save_news", async (req, res) => {
  const allNews = await getNews('https://feeds.bbci.co.uk/portuguese/rss.xml');

  // TODO: Vetorizar notícia e armazenar

  shouldStop = false;

  News.insertMany(allNews, (err) => {
    if (err) shouldStop = true;
  });

  res.status(200).send();
})

module.exports = router;

