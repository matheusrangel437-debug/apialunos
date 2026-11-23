let alunos = [
  { id: 1, nome: 'Ana Silva', email: 'ana@email.com', matricula: '2026001' }
];
let proximoId = 2;

const listarTodos = () => alunos;

const buscarPorId = (id) => alunos.find((aluno) => aluno.id === Number(id));

const criar = ({ nome, email, matricula }) => {
  const novoAluno = {
    id: proximoId++,
    nome,
    email,
    matricula
  };
  alunos.push(novoAluno);
  return novoAluno;
};

const atualizar = (id, { nome, email, matricula }) => {
  const index = alunos.findIndex((aluno) => aluno.id === Number(id));
  if (index === -1) return null;

  alunos[index] = { id: Number(id), nome, email, matricula };
  return alunos[index];
};

const remover = (id) => {
  const index = alunos.findIndex((aluno) => aluno.id === Number(id));
  if (index === -1) return false;

  alunos.splice(index, 1);
  return true;
};

module.exports = {
  listarTodos,
  buscarPorId,
  criar,
  atualizar,
  remover
};
