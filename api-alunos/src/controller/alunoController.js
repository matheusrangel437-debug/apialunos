const alunoModel = require('../models/alunoModel');

const listarAlunos = (req, res) => {
  try {
    const alunos = alunoModel.listarTodos();
    return res.status(200).json(alunos);
  } catch (erro) {
    console.error(erro);
    return res.status(500).json({ erro: 'Erro interno do servidor' });
  }
};

const cadastrarAluno = (req, res) => {
  try {
    const { nome, email, matricula } = req.body;

    if (!nome || !email || !matricula) {
      return res.status(400).json({
        erro: 'Nome, e-mail e matrícula são obrigatórios!'
      });
    }

    const novoAluno = alunoModel.criar({ nome, email, matricula });
    return res.status(201).json({
      mensagem: 'Aluno cadastrado com sucesso!',
      aluno: novoAluno
    });
  } catch (erro) {
    console.error(erro);
    return res.status(500).json({ erro: 'Erro interno do servidor' });
  }
};

const atualizarAluno = (req, res) => {
  try {
    const { id } = req.params;
    const { nome, email, matricula } = req.body;

    if (!nome || !email || !matricula) {
      return res.status(400).json({
        erro: 'Nome, e-mail e matrícula são obrigatórios!'
      });
    }

    const alunoAtualizado = alunoModel.atualizar(id, { nome, email, matricula });

    if (!alunoAtualizado) {
      return res.status(404).json({ erro: 'Aluno não encontrado!' });
    }

    return res.status(200).json({
      mensagem: 'Aluno atualizado com sucesso!',
      aluno: alunoAtualizado
    });
  } catch (erro) {
    console.error(erro);
    return res.status(500).json({ erro: 'Erro interno do servidor' });
  }
};

const excluirAluno = (req, res) => {
  try {
    const { id } = req.params;
    const removido = alunoModel.remover(id);

    if (!removido) {
      return res.status(404).json({ erro: 'Aluno não encontrado!' });
    }

    return res.status(200).json({ mensagem: 'Aluno excluído com sucesso!' });
  } catch (erro) {
    console.error(erro);
    return res.status(500).json({ erro: 'Erro interno do servidor' });
  }
};

module.exports = {
  listarAlunos,
  cadastrarAluno,
  atualizarAluno,
  excluirAluno
};
