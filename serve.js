const express = require('express');
const app = express();
const port = 3000;

// Rota para a página inicial
app.get('/', (req, res) => {
  res.send('<h1>Início</h1><p>Bem-vindo à página inicial!</p>');
});

// Rota para a página Sobre
app.get('/sobre', (req, res) => {
  res.send('<h1>Quiz</h1><p>Esta é a página Sobre nós.</p>');
});

// Rota para a página Contato
app.get('/contato', (req, res) => {
  res.send('<h1>Conteúdo</h1><p>Entre em contato conosco.</p>');
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
