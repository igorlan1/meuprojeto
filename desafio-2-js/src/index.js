const studants = [
  {
    nome: "igor",
    nota1: 8,
    nota2: 4
  },
  {
    nome: "lorran",
    nota1: 7,
    nota2: 7
  },
  {
    nome: "marcia",
    nota1: 7,
    nota2: 10
  },
  {
    nome: "waldir",
    nota1: 4,
    nota2: 9
  },
  {
    nome: "ilma",
    nota1: 8,
    nota2: 7
  }
];

//function of  media
function gradeMedia(grade1, grade2) {
  return ((grade1 + grade2) / 2).toFixed(2);
}

//function to print for each studant approved
function approved(studant) {
  return `A média do aluno (a) ${studant.nome} foi ${gradeMedia(
    studant.nota1,
    studant.nota2
  )} ,
parabens, voce foi aprovado (a) !`;
}

//function to print for each studant repproved
function repproved(studant) {
  return `a media do aluno(a) ${studant.nome} foi ${gradeMedia(
    studant.nota1,
    studant.nota2
  )} ,
  infelizmente voce nao foi aprovado(a)`;
}

for (let studant of studants) {
  if (gradeMedia(studant.nota1, studant.nota2) >= 7) {
    let approvedMessage = approved(studant);
    alert(approvedMessage);
  } else {
    let repprovedMessage = repproved(studant);
    alert(repprovedMessage);
  }
}
