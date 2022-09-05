const express = require('express');
const { getNews } = require('../models/news.js')

const router = express.Router();

router.get("/", async (_req, res) => {
  const news = await getNews('https://feeds.bbci.co.uk/portuguese/rss.xml');
  res.json(news)
})

module.exports = router;
