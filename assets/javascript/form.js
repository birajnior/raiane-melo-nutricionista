const inputText = document.querySelectorAll("input[type='text']");
const inputEmail = document.querySelector("input[type='email']"); // Alterado para selecionar apenas um input
const textArea = document.querySelector("textarea.mensagem");

// Função para lidar com o placeholder
const handlePlaceholder = (element) => {
    element.setAttribute('data-placeholder', element.placeholder); // Armazena o placeholder original

    element.addEventListener("focus", function () {
        this.placeholder = ""; // Remove o placeholder
    });

    element.addEventListener("blur", function () {
        if (this.value === "") {
            this.placeholder = this.getAttribute("data-placeholder"); // Restaura o placeholder
        }
    });
};

// Aplica a função para todos os inputs de texto
inputText.forEach(handlePlaceholder);

// Aplica a função para o input de email
if (inputEmail) {
    handlePlaceholder(inputEmail);
}

// Aplica a função para o textarea
if (textArea) {
    handlePlaceholder(textArea);
}