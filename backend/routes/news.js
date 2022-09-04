import express from 'express';
import { getNews } from '../models/news.js';

const router = express.Router();

router.get("/", async (_req, res) => {
  const news = await getNews('http://rss.uol.com.br/feed/noticias.xml');
  res.json(news)
})

export default router;
