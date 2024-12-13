const btnAgendarConsulta = document.querySelector("#btnAgendarConsulta");
const btnSaibaMais = document.querySelector("#btnSaibaMais");
const btnServicos = document.querySelector("#servicosPrestatos");

btnAgendarConsulta.addEventListener("click", () => {
  window.open(
    "https://wa.me/558187952709?text=Olá%2C%20gostaria%20de%20agendar%20uma%20consulta%20com%20a%20nutricionista%20Raiane%20Melo.%20Poderia%20me%20informar%20as%20datas%20e%20horários%20disponíveis%3F",
    "_blank"
  );
});

btnServicos.addEventListener("click", () => {
  window.open(
    "https://wa.me/558187952709?text=Olá%2C%20gostaria%20de%20saber%20quais%20todos%20os%20serviços%20que%20você%20oferece.",
    "_blank"
  );
});

btnSaibaMais.addEventListener("click", () => {
  window.open(
    "https://wa.me/558187952709?text=Olá%2C%20gostaria%20de%20saber%20mais%20sobre%20sua%20formação!",
    "_blank"
  );
});

const servicos = [
  {
    imagem: "assets/img/servico1.png",
    titulo: "Plano Alimentar Individualizado",
    descricao:
      "Elaboração de um plano alimentar personalizado, adaptado às necessidades, objetivos e rotina do cliente. Visa promover a saúde e atingir metas específicas, como perda de peso, ganho muscular ou melhoria de desempenho.",
  },
  {
    imagem: "assets/img/servico2.png",
    titulo: "Análise Antropométrica",
    descricao:
      "Medição de parâmetros corporais, como peso, altura, circunferências e percentual de gordura. Esta análise é essencial para monitorar o progresso ao longo do acompanhamento nutricional.",
  },
  {
    imagem: "assets/img/servico3.png",
    titulo: "Receitas e Lista de Compras",
    descricao:
      "Receitas saudáveis e práticas, adaptadas às preferências e necessidades do cliente, para facilitar o cumprimento do plano alimentar. Inclui uma lista de compras orientada, ajudando a selecionar alimentos de qualidade e alinhados ao plano, simplificando o processo de compra e evitando desperdícios.",
  },
];

// const testemunhos = [
//   {
//     imagem: "assets/img/img-testemunho.svg",
//     nome: "Courtney Henry",
//     texto:
//       "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
//     avaliacao: "assets/img/avaliacao.png",
//   },
//   {
//     imagem: "assets/img/img-testemunho.svg",
//     nome: "Jane Doe",
//     texto:
//       "Lorem Ipsum has been the industry's standard dummy text since the 1500s.",
//     avaliacao: "assets/img/avaliacao.png",
//   },
//   {
//     imagem: "assets/img/img-testemunho.svg",
//     nome: "John Smith",
//     texto:
//       "When an unknown printer took a galley of type and scrambled it to make a specimen book.",
//     avaliacao: "assets/img/avaliacao.png",
//   },
//   {
//     imagem: "assets/img/img-testemunho.svg",
//     nome: "John Smith",
//     texto:
//       "When an unknown printer took a galley of type and scrambled it to make a specimen book.",
//     avaliacao: "assets/img/avaliacao.png",
//   },
// ];

const gerarServicos = () => {
  const servicosLista = document.getElementById("servicosList");

  servicos.forEach((servicos) => {
    const li = document.createElement("li");
    li.classList.add("card__li");

    li.innerHTML = `
     <img class="li__card--img" src="${servicos.imagem}" alt="Imagem do serviço oferecido">
      <h1  class="li__card--titulo">${servicos.titulo}</h1>
      <h2  class="li__card--descricao" >${servicos.descricao}</h2>
    `;

    servicosLista.appendChild(li);
  });
};

// const gerarTestemunhos = () => {
//   const testemunhosList = document.getElementById("testemunhosList");

//   testemunhos.forEach((testemunho) => {
//     const li = document.createElement("li");
//     li.classList.add("testemunhos__lista-item");

//     li.innerHTML = `
//       <img class="testemunhos__lista-item-img" src="${testemunho.imagem}" alt="${testemunho.nome}">
//       <div class="informacoes">
//         <h1 class="testemunhos__lista-item-nome">${testemunho.nome}</h1>
//         <h2 class="testemunhos__lista-item-testemunho">${testemunho.texto}</h2>
//         <img class="avaliacao-img" src="${testemunho.avaliacao}" alt="Avaliação de ${testemunho.nome}">
//       </div>
//     `;

//     testemunhosList.appendChild(li);
//   });
// };

document.addEventListener("DOMContentLoaded", () => {
  gerarServicos();
  // gerarTestemunhos();
});

function toggleMenu() {
  const menu = document.getElementById("menu");
  const hamburger = document.querySelector(".hamburger");

  menu.classList.toggle("active");
  hamburger.classList.toggle("active");
}
