const express = require('express');
const news = require('../controllers/news.controller')

const router = express.Router();

router.get("/", news.getNews);
router.delete("/", news.deleteNews);

module.exports = router;
