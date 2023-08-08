const getNews = require('../controllers/getNews')

const express = require('express');
const router = express.Router();

// Rota de exemplo
router.get('/', (req, res) => {
    res.send('Olá, mundo! Este é um servidor Express.');
});


// Exportando o roteador
module.exports = router;