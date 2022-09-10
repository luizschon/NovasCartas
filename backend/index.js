const express = require('express');
const cors = require('cors');
const NewsRouter = require('./routes/news.js');
const { spawn } = require('child_process');

const app = express()

app.use(cors())

const port = process.env.PORT || 6969

app.use(express.json({ extended: false }))

app.get('/', (_req, res) => {
  res.send('Hello World!')
})

// Exemplo de uso para script de python com argumentos (rota localhost:6969/script)
// Veja https://www.youtube.com/watch?v=oU78UmZpfCU para mais detalhes
app.get('/script', (_req, res) => {
 
  let dataFromPython = "No data received";
 
  // Cria processo filho como script de python
  const python = spawn('python3', ['../frontend/src/python/script.py']);
  python.stdout.on('data', (data) => {
    dataFromPython = data.toString();
  });

  // Manda resultado para a rota escolhida quando o script terminar de rodar
  python.on('close', (code) => {
    console.log("Code:", code);
    res.send(dataFromPython);
  });
})

// Testa troca de objetos JSON entre Node e o processo Python.
app.get('/test_pyjson', (_req, res) => {
 
  let dataFromPython = "No data received";

  let input = {
    "docs": [
      ["the", "sky", "is", "blue"],
      ["the", "sun", "is", "bright"],
      ["the", "sun", "in", "the", "sky", "is", "bright"],
      ["we", "can", "see", "the", "shining", "sun", "the", "bright", "sun"]
    ]
}
 
  // Cria processo filho como script de python
  const python = spawn('python3', ['../frontend/src/python/test_pyjson.py', JSON.stringify(input)]);
  python.stdout.on('data', (data) => {
    dataFromPython = data.toString();
  });

  // Manda resultado para a rota escolhida quando o script terminar de rodar
  python.on('close', (code) => {
    console.log("Code:", code);
    dataFromPythonJson = JSON.parse(dataFromPython);
    res.send(dataFromPythonJson);
  });
})

app.use('/news', NewsRouter)

app.listen(port, () => {
  console.log(`Novas Cartas listening on port ${port}`)
})

