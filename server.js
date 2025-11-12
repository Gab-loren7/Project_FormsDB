const express = require('express');
const cors = require('cors');
const path = require('path');
const pool = require('./db');

const app = express();
app.use(cors());
app.use(express.json());

// Rota para o index.html
app.get('/', (req,res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Rota para o script.js
app.get('/script.js', (req,res) => {
    res.sendFile(path.join(__dirname, 'script.js'));
});



app.listen(3000, () => console.log('🚀 Servidor rodando na porta 3000'))
