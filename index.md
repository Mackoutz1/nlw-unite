//objeto javascript
const participante = {
  nome: "Miguel Henrique",
  email: "miguell.henriquee06@gmail.com",
  dataInscricao: new Date(2024, 2, 4, 19, 20),
  dataCheckin: new Date(2024 , 2, 5, 22, 00)
}

//array
let participantes = [
  {
    nome: "Miguel Henrique",
    email: "miguell.henriquee06@gmail.com",
    dataInscricao: new Date(2024, 2, 4, 19, 20),
    dataCheckin: new Date(2024 , 2, 5, 22, 00)
  },
];

for(let participante of participantes) {
    //faça alguma coisa
    output = output + criarNovoParticipante(participante)
  }