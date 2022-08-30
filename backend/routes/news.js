const express = require('express')
const router = express.Router();

const mock_news = [
  {
    id: 1,
    title: "Teste 1",
    description: "Descrição 1",
    date: "27/08/2000",
    body: "Lorem ipsum varias vezes aqui.",
  },
  {
    id: 2,
    title: "Teste 2",
    description: "Descrição 2",
    date: "27/08/2000",
    body: "Lorem ipsum varias vezes aqui.",
  },
  {
    id: 3,
    title: "Teste 3",
    description: "Descrição 3",
    date: "27/08/2000",
    body: "Lorem ipsum varias vezes aqui.",
  },
  {
    id: 4,
    title: "Teste 4",
    description: "Descrição 4",
    date: "27/08/2000",
    body: "Lorem ipsum varias vezes aqui.",
  },
]

router.get("/", (_req, res) => {
  res.json(mock_news)
})

module.exports = router
