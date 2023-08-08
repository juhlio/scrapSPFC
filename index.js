// Importando as dependências
const express = require('express');
const routes = require('./routes/routes');


// Criando uma instância do Express
const app = express();
app.use(routes);
const port = 3000; // Porta que o servidor irá escutar



// Iniciando o servidor
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
