import express from 'express';
import cors from 'cors';
import NewsRouter from './routes/news.js';

const app = express()
const lcs = require('./routes/lcs')

app.use(cors())

const port = process.env.PORT || 6969

app.use(express.json({ extended: false }))

app.get('/', (_req, res) => {
  res.send('Hello World!')
})

app.use('/news', NewsRouter)

app.use('/lcstest', lcs);

app.listen(port, () => {
  console.log(`Novas Cartas listening on port ${port}`)
})

