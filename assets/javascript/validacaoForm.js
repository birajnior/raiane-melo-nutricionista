const form = document.querySelector("#formContato");
const campos = document.querySelectorAll(".requerido");
const spans = document.querySelectorAll(".span-requerido")
const emailRegex = /^([A-Za-z0-9_\-.])+@([A-Za-z0-9_\-.])+\.([A-Za-z]{2,4})$/;

function setError(index) {
  campos[index].style.border = "0.1563rem solid #ff0000"
  spans[index].style.display = "block"
}
function removerError(index) {
  campos[index].style.border = ""
  spans[index].style.display = "none"
}

function validacaoNome() {
  if (campos[0].value.length < 3) {
    setError(0);
  } else {
    removerError(0)
  }
}

function validacaoWhatsapp() {
  let whatsapp = document.querySelector(".whatsapp")

  whatsapp.addEventListener("input", () => {
    let limparValor = whatsapp.value.replace(/\D/g, "").substring(0, 11) 

    let numeros = limparValor.split("")
    let numeroFormatado = ""

    if (numeros.length > 0) {
      numeroFormatado += `(${numeros.slice(0, 2).join("")})`
    }

    if (numeros.length > 2) {
      numeroFormatado += ` ${numeros.slice(2, 7).join("")}`
    }

    if (numeros.length > 7) {
      numeroFormatado += `-${numeros.slice(7, 11).join("")}`
    }

    whatsapp.value = numeroFormatado
  })
}

function validandoEmail() {
  if (!emailRegex.test(campos[2].value)) {
    setError(2)
  } else {
    removerError(2)
  }
}

function validandoMensagem() {
  if (campos[3].value.length < 10) {
    setError(3)
  } else {
    removerError(3)
  }
}