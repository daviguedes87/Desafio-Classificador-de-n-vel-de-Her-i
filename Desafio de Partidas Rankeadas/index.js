/* O QUE É: Declaração de uma função constante.
  PARA QUE SERVE: Armazena a lógica de cálculo para ser executada apenas quando chamada.
  CONSEQUÊNCIA: Evita que o código rode sozinho; ele aguarda o comando do usuário (clique).
*/
const classification = function() {
  // O QUE É: Captura de elementos do DOM.
  // PARA QUE SERVE: Pega as referências das caixas de texto do HTML para ler os valores.
  const victories = document.getElementById("victories");
  const defeats = document.getElementById("defeats");

  // O QUE É: Conversão de tipos (String para Number).
  // PARA QUE SERVE: Garante que os valores digitados sejam tratados como números para a conta de subtração.
  let numberDefeats = Number(defeats.value);
  let numberVictories = Number(victories.value);

  // O QUE É: Operação aritmética de subtração.
  // PARA QUE SERVE: Calcula o saldo líquido de vitórias do herói.
  let difference = numberVictories - numberDefeats;

  // O QUE É: Inicialização de variável de texto.
  // PARA QUE SERVE: Cria um espaço vazio para guardar o nome do ranking que será decidido abaixo.
  let rank = "";

  /* O QUE É: Estrutura de controle Switch (com padrão booleano true).
    PARA QUE SERVE: Avalia qual dos casos abaixo retorna "verdadeiro" para definir o rank.
    CONSEQUÊNCIA: O JavaScript testa cada faixa de valor até encontrar a primeira que combine com o saldo.
  */
  switch (true) {
    case (difference <= 10):
      rank = "Ferro";
      break; // O QUE É: Comando de interrupção. PARA QUE SERVE: Sai do switch assim que achar a resposta.

    case (difference <= 20):
      rank = "Bronze";
      break;

    case (difference <= 50):
      rank = "Prata";
      break;

    case (difference <= 80):
      rank = "Ouro";
      break;

    case (difference <= 90):
      rank = "Diamante";
      break;

    case (difference <= 100):
      rank = "Lendário";
      break;

    default:
      // O QUE É: Caso padrão (Fallback).
      // PARA QUE SERVE: Define o nível máximo se o saldo for maior que 100.
      rank = "Imortal";
      break;
  }

  // O QUE É: Alerta de janela (Pop-up).
  // PARA QUE SERVE: Dá um feedback imediato ao usuário sobre o resultado.
  alert("O Herói tem saldo de: " + difference + " e está no nível: " + rank);

  // O QUE É: Captura dos inputs de exibição (saída).
  // PARA QUE SERVE: Identifica onde os resultados devem aparecer na interface da página.
  const deffeatsBalanceInput = document.getElementById("deffeatsBalance");
  const positionRankInput = document.getElementById("positionRank");

  /* O QUE É: Atribuição de valores aos campos de saída.
    PARA QUE SERVE: Preenche automaticamente os inputs (provavelmente disabled) com o saldo e o rank.
    CONSEQUÊNCIA: O usuário vê o resultado final direto na página, sem precisar apenas do alerta.
  */
  deffeatsBalanceInput.value = difference;
  positionRankInput.value = rank;
}

/* O QUE É: Event Listener (Ouvinte de eventos).
  PARA QUE SERVE: "Vigia" o botão de cálculo.
  CONSEQUÊNCIA: Assim que o botão com ID "calcBtn" for clicado, ele dispara a função classification.
*/
document.getElementById("calcBtn").addEventListener("click", classification);