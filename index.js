let participantes = [
  {
    nome: "Miguel Henrique",
    email: "miguell.henriquee06@gmail.com",
    dataInscricao: new Date(2024, 2, 4, 19, 20),
    dataCheckin: new Date(2024 , 2, 5, 22, 30)
  },
  {
    nome: "João da Silva",
    email: "joaosilva@gmail.com",
    dataInscricao: new Date(2024, 1, 15, 14, 30),
    dataCheckin: new Date(2024 , 1, 16, 8, 45)
  },
  {
    nome: "Ana Souza",
    email: "anasouza@gmail.com",
    dataInscricao: new Date(2024, 0, 20, 10, 15),
    dataCheckin: new Date(2024 , 0, 21, 12, 20)
  },
  {
    nome: "Carlos Oliveira",
    email: "carlosoliveira@gmail.com",
    dataInscricao: new Date(2024, 2, 1, 16, 45),
    dataCheckin: new Date(2024 , 2, 2, 9, 30)
  },
  {
    nome: "Maria Santos",
    email: "mariasantos@gmail.com",
    dataInscricao: new Date(2024, 1, 10, 20, 0),
    dataCheckin: new Date(2024 , 1, 11, 10, 45)
  },
  {
    nome: "Pedro Costa",
    email: "pedrocosta@gmail.com",
    dataInscricao: new Date(2024, 0, 5, 12, 30),
    dataCheckin: new Date(2024 , 0, 6, 15, 10)
  },
  {
    nome: "Luciana Lima",
    email: "lucianalima@gmail.com",
    dataInscricao: new Date(2024, 2, 10, 9, 0),
    dataCheckin: new Date(2024 , 2, 11, 11, 20)
  },
  {
    nome: "Fernando Santos",
    email: "fernandosantos@gmail.com",
    dataInscricao: new Date(2024, 1, 1, 18, 45),
    dataCheckin: new Date(2024 , 1, 2, 7, 30)
  },
  {
    nome: "Juliana Oliveira",
    email: "julianaoliveira@gmail.com",
    dataInscricao: new Date(2024, 0, 25, 14, 0),
    dataCheckin: new Date(2024 , 0, 26, 10, 15)
  },
  {
    nome: "Rafael Silva",
    email: "rafaelsilva@gmail.com",
    dataInscricao: new Date(2024, 1, 5, 11, 30),
    dataCheckin: new Date(2024 , 1, 6, 9, 45)
  },
];


const criarNovoParticipante = (participante) => {
  const dataInscricao = dayjs(Date.now()).to(participante.dataInscricao)
  
  let dataCheckin = dayjs(Date.now()).to(participante.dataCheckin)

  if (participante.dataCheckin == null) {
    dataCheckin = `
    <button data-email="${participante.email}" onclick="fazerCheckIn(event)">
      Corfirmar Check-In
    </button>
    `
  }

  return `
  <tr>
    <td>
      <strong>
        ${participante.nome}
      </strong>
      <br>
      <small>
        ${participante.email}
      </small>
    </td>
    <td>${dataInscricao}</td>
    <td>${dataCheckin}</td>
  </tr>
  `
}

const atualizarLista = (participantes) => {
  let output = ""
  //estrutura de repetição - loop
  for(let participante of participantes) {
    //faça alguma coisa
    output = output + criarNovoParticipante(participante)
  }
  //substituir informação do HTML
  document.querySelector('tbody').innerHTML = output
}

atualizarLista(participantes)

const adicionarParticipante = (event) => {
  event.preventDefault()

  const dadosDoFormulario = new FormData(event.target)

  const participante = {
    nome: dadosDoFormulario.get('nome'),
    email: dadosDoFormulario.get('email'),
    dataInscricao: new Date(),
    dataCheckin: null
  }

  // verificar se o participante já existe
  const participanteExiste = participantes.find(
    (p) => p.email == participante.email
  )

  if(participanteExiste) {
    alert('Email Já cadastrado!')
    event.target.querySelector('[name="nome"]').value = ""
    event.target.querySelector('[name="email"]').value = ""
    return
  }

  participantes = [participante, ...participantes]
  atualizarLista(participantes)

  //limpar o formulario
  event.target.querySelector('[name="nome"]').value = ""
  event.target.querySelector('[name="email"]').value = ""
}

const fazerCheckIn = (event) => {
  //confirmar realmente que quer fazer check-in
  const mensagemConfirmacao = 'Tem certeza que deseja fazer o check-in?'

  if (confirm(mensagemConfirmacao) == false) {
    return
  }

  //encontrar o partipicipante dentro da lista
  const participante = participantes.find((p) => {
    return p.email == event.target.dataset.email 
  })
  //atualizar o check-in do participante
  participante.dataCheckin = new Date()

  //atualizar a lista de participantes com o novo
  atualizarLista(participantes)
}