const express = require('express')
const cors = require('cors')
const app = express()
const news = require('./routes/news')

app.use(cors())

const port = process.env.PORT || 6969

app.use(express.json({ extended: false }))

app.get('/', (_req, res) => {
  res.send('Hello World!')
})

app.use('/news', news)

app.listen(port, () => {
  console.log(`Novas Cartas listening on port ${port}`)
})

