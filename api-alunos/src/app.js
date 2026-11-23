const express = require('express');
const registrarAcesso = require('./middlewares/registrarAcesso');
const alunoRoutes = require('./routes/alunoRoutes');

const app = express();

// Middlewares
app.use(express.json());
app.use(registrarAcesso);

// Rotas
app.use(alunoRoutes);

module.exports = app;
