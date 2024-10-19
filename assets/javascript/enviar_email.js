document.addEventListener('DOMContentLoaded', function () {
  emailjs.init("3lt2h_pXQRRhs06ua");

  document.getElementById("formContato").addEventListener("submit", function (event) {
    event.preventDefault();

    // Envio dos dados do formulário para EmailJS
    emailjs.sendForm('service_7s18yah', 'template_n16360x', this)
      .then(function () {
        alert("Mensagem enviada com sucesso!");
        document.getElementById("formContato").reset()
      }, function (error) {
        alert("Erro ao enviar a mensagem. Tente novamente.", error);
      });
  });
});
