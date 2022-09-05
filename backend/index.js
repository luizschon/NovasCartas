const express = require('express');
const cors = require('cors');
const NewsRouter = require('./routes/news.js');

const app = express()

app.use(cors())

const port = process.env.PORT || 6969

app.use(express.json({ extended: false }))

app.get('/', (_req, res) => {
  res.send('Hello World!')
})

app.use('/news', NewsRouter)

app.listen(port, () => {
  console.log(`Novas Cartas listening on port ${port}`)
})

