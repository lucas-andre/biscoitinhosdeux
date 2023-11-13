const inspirationList = [
    "Em dúvida sobre elementos da UI? Priorize a consistência.",
    "Lei de Hick: Quanto mais opções você apresenta ao usuário, mais tempo ele levará para tomar uma decisão. Você poderia diminuir as opções de escolha para o usuário na sua tarefa?",
    "Simplicidade no design e também na interação.",
    "Você está sacrificando a clareza em nome do design?",
    "Lei de Jakob: Os usuários passam a maior parte do tempo em outros sites/apps. Isso enfatiza a importância da consistência com convenções da web amplamente aceitas. O que você pode incorporar na UI, que já é usado em outros apps?",
    "80% dos resultados vêm de 20% dos esforços. Concentre-se nas melhorias que terão o maior impacto.",
    "Lei de Doherty: Também conhecida como a Lei do Tempo Percebido, essa lei afirma que os usuários ficarão mais satisfeitos se as tarefas forem concluídas mais rapidamente do que o esperado. Como você pode aplicar isso na sua tarefa?",
    "Qual o feedback que o usuário recebe ao interagir com o componente?",
    "Lembre-se de que a primeira impressão é crucial.",
    "Divida a funcionalidade em partes menores, facilita o processo de construção.",
    "Não precisa ser perfeito, detalhes vêm depois.",
    "Está obcecado por pequenos detalhes? Desenhe com uma caneta, a falta de definição pode te trazer clareza.",
    "Resista a tentação de introduzir cores imediatamente. Ao projetar em tons de cinza, você é forçado a usar espaçamento, contraste e tamanho para fazer o trabalho pesado.",
    "https://assets-global.website-files.com/62e89931273b5c21be76c486/63c1988e935f5dbd32a64b69_MVP_Exemplo.jpeg",
    "Azul é seguro, familiar e maleável - niguém nunca reclama da cor azul.",
    "Limite suas escolhas: Ter milhões de cores e milhares de ícones parece bom na teoria, mas na prática é uma maldição paralisante. E não é só sobre cores e ícones.",
    "Sistematize tudo: Quanto mais sistemas você tiver, mais rápido você poderá trabalhar e irá tomar decisões com mais confiança.",
    "Tente enfatizar des-enfatizando. As vezes é melhor destacar algo tirando destaque de coisas em volta, não adicionando mais purpurina.",
    "Legendas e dois pontos são a última alternativa. Na maioria das vezes o formato LEGENDA: VALOR é uma armadilha, só exibir VALOR já dá conta do recado. Isso vale para email, (xx)xxx-xxx, fulano...",
    "Uma das maneiras mais fáceis de limpar um design é simplesmente dar a cada elemento um pouco mais de espaço para respirar.",
    "O efeito Von Restorff, também conhecido como Efeito de Isolamento, prevê que quando vários objetos semelhantes estão presentes, aquele que difere dos demais tem maior probabilidade de ser lembrado."
  ];

  const challengesList = [
    "Crie um botão de chamada à ação (CTA) que chame a atenção sem usar cores vibrantes.",
    "Projete um cartão de perfil para um usuário de mídia social, incluindo uma foto, nome e algumas informações pessoais.",
    "Projete um botão de alternância (on/off) com uma aparência atraente.",
    "Reorganize os ícones da sua área de trabalho de uma maneira mais agradável e organizada.",
    "Tente recriar o logotipo de uma empresa conhecida do zero ou faça uma variação do mesmo.",
    "Desenhe um ícone de perfil simples que represente você ou um personagem fictício.",
    "Desenhe um cartão de produto com uma imagem, título, preço e botão de compra.",
    "Crie a tela principal de um app de clima para apple watch",
    "Projete uma interface do usuário para uma espécie alienígena que precisa se comunicar com humanos, eles só entendem elementos visuais",
    "Crie uma interface para uma máquina do tempo (relógio digital), considerando como os usuários interagiriam com diferentes épocas e eventos.",
  ];
  
  function generateInspiration() {
    const inspirationText = document.getElementById("inspiration-text");
    const randomIndex = Math.floor(Math.random() * inspirationList.length);
    const randomItem = inspirationList[randomIndex];
  
    if (randomItem.startsWith("http")) {
      // Se o item for uma URL, exiba uma imagem
      inspirationText.innerHTML = `<img class="imgWrapped" src="${randomItem}" alt="Inspiration Image">`;
    } else {
      // Caso contrário, exiba o texto
      inspirationText.textContent = randomItem;
    }
  }
  
  const generateButton = document.getElementById("generate-button");
  generateButton.addEventListener("click", generateInspiration);
  
  document.addEventListener("DOMContentLoaded", function () {
    const showSectionLink = document.getElementById("show-section-link");
    const hiddenSection = document.getElementById("hidden-section");
  
    showSectionLink.addEventListener("click", function (e) {
      e.preventDefault();
      hiddenSection.style.display = "block";
      hiddenSection.scrollIntoView({ behavior: "smooth" });
    });
  });
  
  const copyButton = document.getElementById("copy-button");
  const successMessage = document.getElementById("successMessage");
  const inspirationText = document.getElementById("inspiration-text");
  
  copyButton.addEventListener("click", function () {
    const textToCopy = inspirationText.innerText;
    const textArea = document.createElement("textarea");
    textArea.value = textToCopy;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand("copy");
    document.body.removeChild(textArea);
  
    successMessage.style.display = "block";
  
    setTimeout(function () {
      successMessage.style.display = "none";
    }, 2000);
  });

  function generateInspiration() {
    const inspirationText2 = document.getElementById("inspiration-text2");
    const randomIndex = Math.floor(Math.random() * challengesList.length);
    const randomItem = challengesList[randomIndex];
  
    if (randomItem.startsWith("http")) {
      // Se o item for uma URL, exiba uma imagem
      inspirationText2.innerHTML = `<img class="imgWrapped" src="${randomItem}" alt="Inspiration Image">`;
    } else {
      // Caso contrário, exiba o texto
      inspirationText2.textContent = randomItem;
    }
  }
  
  const generateButton2 = document.getElementById("generate-button2");
  generateButton2.addEventListener("click", generateInspiration);
  
  document.addEventListener("DOMContentLoaded", function () {
    const showSectionLink2 = document.getElementById("show-section-link2");
    const hiddenSection2 = document.getElementById("hidden-section2");
  
    showSectionLink2.addEventListener("click", function (e) {
      e.preventDefault();
      hiddenSection2.style.display = "block";
      hiddenSection2.scrollIntoView({ behavior: "smooth" });
    });
  });
  
  const copyButton2 = document.getElementById("copy-button2");
  const successMessage2 = document.getElementById("successMessage2");
  const inspirationText2 = document.getElementById("inspiration-text2");
  
  copyButton.addEventListener("click", function () {
    const textToCopy2 = inspirationText2.innerText;
    const textArea2 = document.createElement("textarea");
    textArea2.value = textToCopy2;
    document.body.appendChild(textArea2);
    textArea2.select();
    document.execCommand("copy");
    document.body.removeChild(textArea2);
  
    successMessage.style.display = "block";
  
    setTimeout(function () {
      successMessage.style.display = "none";
    }, 2000);
  });
  
  
  
  //what
  
  document.addEventListener("DOMContentLoaded", function () {
      const buttons = document.querySelectorAll(".scroll-button");
      const sections = document.querySelectorAll("section");
  
      window.addEventListener("scroll", function () {
          sections.forEach((section, index) => {
              const button = buttons[index];
              if (isInViewport(section)) {
                  button.classList.add("active");
              } else {
                  button.classList.remove("active");
              }
          });
      });
  
      buttons.forEach((button) => {
          button.addEventListener("click", () => {
              const target = button.getAttribute("data-target");
              const section = document.getElementById(target);
  
              if (section) {
                  window.scroll({
                      top: section.offsetTop,
                      behavior: "smooth",
                  });
              }
          });
      });
  
      function isInViewport(element) {
          const rect = element.getBoundingClientRect();
          return (
              rect.top >= 0 &&
              rect.left >= 0 &&
              rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
              rect.right <= (window.innerWidth || document.documentElement.clientWidth)
          );
      }
  });
  