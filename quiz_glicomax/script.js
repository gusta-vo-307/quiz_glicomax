// Redireciona para a próxima página do quiz
function goToNextPage(page) {
  window.location.href = page;
}

// Atualiza a barra de progresso
function updateProgressBar(value) {
  const progressBar = document.getElementById('progress-bar');
  if (progressBar) {
    progressBar.style.setProperty('--value', value + '%');
  }
}

// Inicializa a barra de progresso quando a página carrega
document.addEventListener('DOMContentLoaded', function() {
  const progressBar = document.getElementById('progress-bar');
  if (progressBar) {
    progressBar.style.setProperty('--value', value);
  }
});
