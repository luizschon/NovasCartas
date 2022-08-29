const express = require('express')
const app = express()
const test = require('./routes/test')

const port = process.env.PORT || 6969

app.use(express.json({ extended: false }))

app.get('/', (_req, res) => {
  res.send('Hello World!')
})

app.use('/test', test)

app.listen(port, () => {
  console.log(`Novas Cartas listening on port ${port}`)
})

