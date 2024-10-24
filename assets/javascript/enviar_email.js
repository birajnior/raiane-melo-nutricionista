// document.addEventListener('DOMContentLoaded', function () {
//   // Inicializando o EmailJS com a Public Key correta
//   emailjs.init("mKlF4LVxHKdurEBfS");

//   // Lidando com o envio do formulário
//   document.getElementById("formContato").addEventListener("submit", function (event) {
//     event.preventDefault(); // Evita o reload da página ao enviar o formulário

//     emailjs.sendForm('service_7s18yah', 'template_n16360x', this)
//       .then(function () {
//         alert("Mensagem enviada com sucesso!");
//         document.getElementById("formContato").reset(); // Limpa o formulário após o envio
//       }, function (error) {
//         alert("Erro ao enviar a mensagem. Tente novamente.");
//         console.error("Erro: ", error);
//       });
//   });
// });

document.addEventListener('DOMContentLoaded', function () {
  emailjs.init("mKlF4LVxHKdurEBfS");

  document.getElementById("formContato").addEventListener("submit", function (event) {
    event.preventDefault();

    let templateParams = {
      subject: "Nova mensagem de contato",
      nome: document.getElementById("nome").value,
      email: document.getElementById("email").value,
      whatsapp: document.getElementById("whatsapp").value,
      mensagem: document.getElementById("mensagem").value
    };

    emailjs.send('service_7s18yah', 'template_n16360x', templateParams)
      .then(function () {
        alert("Mensagem enviada com sucesso!");
        document.getElementById("formContato").reset();
      }, function (error) {
        alert("Erro ao enviar a mensagem. Tente novamente.");
        console.error("Erro: ", error);
      });
  });
});