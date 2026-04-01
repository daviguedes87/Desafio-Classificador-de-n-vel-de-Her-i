// Definimos uma função constante chamada classificarHeroi que será executada ao clicar no botão.
const classificarHeroi = function() {
  
  // Capturamos os elementos de entrada (inputs) do HTML usando seus IDs.
  // Fazemos isso para conseguir ler o que o usuário digitou.
  const inputXP = document.getElementById('powerHeroi');
  const inputNome = document.getElementById('nameHeroi');

  // Criamos uma variável 'xp' que recebe o valor do input, convertido para Número.
  // O .value sempre traz uma String (texto), por isso o Number() é essencial para cálculos.
  let xp = Number(inputXP.value); 
  
  // Criamos uma variável vazia para armazenar o nome do nível que será decidido abaixo.
  let nivel = "";

  // Iniciamos a estrutura de decisão (if/else if).
  // Ela testa o valor de 'xp' de cima para baixo. Assim que uma condição é real, as outras são ignoradas.
  if (xp < 1000) {
    nivel = "Ferro"; // Se for menor que 1000, o nível recebe o texto "Ferro".
  } else if (xp <= 2000) {
    nivel = "Bronze"; // Se não for < 1000, mas for até 2000, recebe "Bronze".
  } else if (xp <= 5000) {
    nivel = "Prata"; // Se estiver entre 2001 e 5000, recebe "Prata".
  } else if (xp <= 7000) {
    nivel = "Ouro"; // Se estiver entre 5001 e 7000, recebe "Ouro".
  } else if (xp <= 8000) {
    nivel = "Platina"; // Se estiver entre 7001 e 8000, recebe "Platina".
  } else if (xp <= 9000) {
    nivel = "Ascendente"; // Se estiver entre 8001 e 9000, recebe "Ascendente".
  } else if (xp <= 10000) {
    nivel = "Imortal"; // Se estiver entre 9001 e 10000, recebe "Imortal".
  } else {
    nivel = "Radiante"; // Se for qualquer valor acima de 10000, cai no "else" (caso contrário).
  }

  // Agora capturamos os campos de saída (onde o resultado será exibido na tela).
  const inputResultadoXp = document.getElementById('showXpHeroi');
  const inputResultadoNome = document.getElementById('showNameHeroi'); 

  // Atribuímos os valores calculados aos campos de resultado.
  // O .value aqui serve para escrever o texto dentro do campo do formulário.
  inputResultadoXp.value = nivel;      
  inputResultadoNome.value = inputNome.value; 

  // Exibimos uma janela de alerta com a mensagem final combinando (concatenando) textos e variáveis.
  alert("O Herói de nome " + inputNome.value + " está no nível de " + nivel);
}

// Esta linha "escuta" o clique no botão com id "heroiBtn".
// Quando clicado, ele dispara a função classificarHeroi que criamos acima.
document.getElementById("heroiBtn").addEventListener("click", classificarHeroi);

