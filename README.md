# Raiane Melo - Website de Nutrição 🥗

---

## Descrição do Projeto

Este website foi desenvolvido para a nutricionista Raiane Melo, com uma interface moderna e intuitiva. O objetivo é facilitar a apresentação dos serviços, oferecer uma experiência agradável e permitir que os visitantes realizem agendamentos diretamente na plataforma.

---

## 🚀 Tecnologias Utilizadas

- **HTML5:** Estruturação semântica e organização das páginas para uma navegação acessível.
- **CSS3:** Estilos personalizados com responsividade e transições que enriquecem a aparência.
- **JavaScript:** Dinamismo e interatividade, possibilitando manipulação de componentes e animações.

### Funcionalidades CSS e Componentes

- **CSS Custom Properties:** Uso de variáveis para cores e fontes, garantindo consistência.
- **Flexbox e Grid Layout:** Alinhamento e layout responsivo.
- **Animações:** Transições suaves para uma experiência visual aprimorada.

### Bibliotecas e Ferramentas

- **EmailJS:** Para envio de emails diretamente do formulário de contato.
- **Font Awesome:** Ícones que complementam a estética visual do site.
- **Google Fonts:** "Poppins" e "Roboto" para uma tipografia moderna e legível.

### Animações

- **AOS (Animate On Scroll):** Animações ativadas conforme o usuário rola a página, criando uma navegação dinâmica.

---

## 📑 Estrutura do Projeto

- **Página Inicial:** Introdução da nutricionista e botão de agendamento.
- **Serviços:** Apresentação dos serviços em cartões individuais.
- **Sobre Mim:** Biografia e trajetória profissional.
- **Testemunhos:** Depoimentos de clientes satisfeitos.
- **Contato:** Formulário com campos para nome, email, WhatsApp e mensagem.

---

## ⚙️ Funcionalidades JavaScript

- **Botões de Ação:** Ações configuradas nos botões "Agendar Consulta" e "Saiba Mais", atualmente com alertas de clique.
- **Geração Dinâmica de Conteúdo:** O JavaScript organiza a exibição de conteúdo nas seções de Serviços e Depoimentos, permitindo fácil atualização diretamente no código.
- **Renderização Dinâmica:** Funções para geração automática de cartões de serviço e depoimentos.
- **Placeholders Interativos:** Função `handlePlaceholder` para esconder e restaurar placeholders ao focar nos campos de entrada.

### Validação e Envio do Formulário

- **Validação dos Campos:**

  - **Nome:** Requer no mínimo 3 caracteres, com feedback visual em caso de erro.
  - **WhatsApp:** Formatação automática para o padrão brasileiro (XX) XXXXX-XXXX ao digitar.
  - **E-mail:** Validação com regex para garantir o formato correto.
  - **Mensagem:** Requer pelo menos 10 caracteres para envio.

- **Manipulação de Placeholder:** Os placeholders são ocultados ao focar no campo e restaurados ao sair, deixando a interface mais limpa.
- **Envio com EmailJS:** Integração com EmailJS para o envio direto de mensagens para o e-mail da nutricionista, oferecendo um feedback imediato sobre o status da mensagem.

---

## 🖌️ Paleta de Cores

- **Primária:** #94694c (para destaques e títulos).
- **Secundária:** #a68776 (para hovers e detalhes complementares).
- **Branco:** #ffffff (fundo e contraste para textos).

---

## 📄 Estrutura do Código JavaScript

```javascript
const btnAgendarConsulta = document.querySelector("#btnAgendarConsulta");
const btnSaibaMais = document.querySelector("#btnSaibaMais");

btnAgendarConsulta.addEventListener("click", () => {
  alert("clicou");
});

btnSaibaMais.addEventListener("click", () => {
  alert("clicou");
});
```
