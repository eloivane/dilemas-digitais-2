function corrigirQuiz() {
  const q1 = document.querySelector('input[name="q1"]:checked');
  const q2 = document.querySelector('input[name="q2"]:checked');
  const resultado = document.getElementById("resultado");

  if (!q1 || !q2) {
    resultado.style.backgroundColor = "#ffcccc";
    resultado.style.color = "#990000";
    resultado.innerHTML = "⚠️ Por favor, escolha uma resposta para cada pergunta antes de clicar!";
    return;
  }

  let pontos = 0;
  if (q1.value === "1") pontos++;
  if (q2.value === "1") pontos++;

  resultado.style.backgroundColor = "#d4edda";
  resultado.style.color = "#155724";

  if (pontos === 2) {
    resultado.innerHTML = "🎉 Excelente! Você acertou as 2 perguntas! Está muito bem informado! 👏⭐";
  } else if (pontos === 1) {
    resultado.innerHTML = "🙂 Você acertou 1 de 2 perguntas! Dê uma olhada na página de Dicas para aprender mais! 💡";
  } else {
    resultado.innerHTML = "💙 Você acertou 0 de 2 perguntas. Não tem problema, leia a página de Dicas e tente novamente! 📖";
  }
}