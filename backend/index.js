const express = require('express');
const cors = require('cors');
const NewsRouter = require('./routes/news.routes.js');
const JobsRouter = require('./jobs/saveNews.js');

const app = express()
const db = require('./models/index.js')
app.use(cors())

require('./routes/user.routes')(app);

db.mongoose.connect(db.url, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log("Conectado ao Banco de Dados!");
}).catch(err => {
  console.log("Não foi possível conectar ao Banco de Dados!", err);
  process.exit();
})

const port = process.env.PORT || 6969

app.use(express.json({ extended: false }))

app.get('/', (_req, res) => {
  res.send('Hello World!')
})

app.use('/news', NewsRouter)
app.use('/jobs', JobsRouter)

app.listen(port, () => {
  console.log(`Novas Cartas listening on port ${port}`)
})

