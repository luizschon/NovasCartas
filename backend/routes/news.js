const express = require('express')
const router = express.Router();

const mock_news = [
  {
    id: 1,
    title: "Teste 1",
    description: "Descrição 1",
    date: "27/08/2000",
    body: "Lorem ipsum varias vezes aqui.",
    url: "https://youtube.com",
  },
  {
    id: 2,
    title: "Teste 2",
    description: "Descrição 2",
    date: "27/08/2000",
    body: "Lorem ipsum varias vezes aqui.",
    url: "https://gmail.com",
  },
  {
    id: 3,
    title: "Teste 3",
    description: "Descrição 3 - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    date: "27/08/2000",
    body: "Lorem ipsum varias vezes aqui.",
    url: "https://aprender3.unb.br",
  },
  {
    id: 4,
    title: "Teste 4",
    description: "Descrição 4",
    date: "27/08/2000",
    body: "Lorem ipsum varias vezes aqui.",
    url: "https://google.com",
  },
]

router.get("/", (_req, res) => {
  res.json(mock_news)
})

module.exports = router
