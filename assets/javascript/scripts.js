const btnAgendarConsulta = document.querySelector("#btnAgendarConsulta");
const btnSaibaMais = document.querySelector("#btnSaibaMais");

btnAgendarConsulta.addEventListener("click", () => {
  alert("clicou");
});

btnSaibaMais.addEventListener("click", () => {
  alert("clicou");
});

const servicos = [
  {
    imagem: "assets/img/servico1.png",
    titulo: "Lorem Ipsum",
    descricao:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. lorem Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled",
  },
  {
    imagem: "assets/img/servico2.png",
    titulo: "Lorem Ipsum",
    descricao:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
  {
    imagem: "assets/img/servico3.png",
    titulo: "Lorem Ipsum",
    descricao:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
];

const testemunhos = [
  {
    imagem: "assets/img/img-testemunho.svg",
    nome: "Courtney Henry",
    texto: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    avaliacao: "assets/img/avaliacao.png"
  },
  {
    imagem: "assets/img/img-testemunho.svg",
    nome: "Jane Doe",
    texto: "Lorem Ipsum has been the industry's standard dummy text since the 1500s.",
    avaliacao: "assets/img/avaliacao.png"
  },
  {
    imagem: "assets/img/img-testemunho.svg",
    nome: "John Smith",
    texto: "When an unknown printer took a galley of type and scrambled it to make a specimen book.",
    avaliacao: "assets/img/avaliacao.png"
  },
  {
    imagem: "assets/img/img-testemunho.svg",
    nome: "John Smith",
    texto: "When an unknown printer took a galley of type and scrambled it to make a specimen book.",
    avaliacao: "assets/img/avaliacao.png"
  }
];

const gerarServicos = () => {
  const servicosLista = document.getElementById("servicosList");

  servicos.forEach((servicos) => {
    const li = document.createElement("li");
    li.classList.add("card__li");

    li.innerHTML = `
     <img src="${servicos.imagem}" alt="Imagem do serviço oferecido">
      <h1>${servicos.titulo}</h1>
      <h2>${servicos.descricao}</h2>
    `;

    servicosLista.appendChild(li);
  });
}

const gerarTestemunhos = () => {
  const testemunhosList = document.getElementById("testemunhosList");

  testemunhos.forEach((testemunho) => {

    const li = document.createElement("li");
    li.classList.add("testemunhos__lista-item");


    li.innerHTML = `
      <img class="testemunhos__lista-item-img" src="${testemunho.imagem}" alt="${testemunho.nome}">
      <div class="informacoes">
        <h1 class="testemunhos__lista-item-nome">${testemunho.nome}</h1>
        <h2 class="testemunhos__lista-item-testemunho">${testemunho.texto}</h2>
        <img class="avaliacao-img" src="${testemunho.avaliacao}" alt="Avaliação de ${testemunho.nome}">
      </div>
    `;


    testemunhosList.appendChild(li);
  });
};

document.addEventListener("DOMContentLoaded", () => {
  gerarServicos();
  gerarTestemunhos();
});