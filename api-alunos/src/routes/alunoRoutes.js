const express = require('express');
const router = express.Router();
const alunoController = require('../controller/alunoController');

router.get('/alunos', alunoController.listarAlunos);
router.post('/alunos', alunoController.cadastrarAluno);
router.put('/alunos/:id', alunoController.atualizarAluno);
router.delete('/alunos/:id', alunoController.excluirAluno);

module.exports = router;
