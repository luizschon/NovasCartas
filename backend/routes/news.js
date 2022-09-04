import express from 'express';
import { getNews } from '../models/news.js';

const router = express.Router();

router.get("/", async (_req, res) => {
  const news = await getNews('https://feeds.bbci.co.uk/portuguese/rss.xml');
  res.json(news)
})

export default router;
