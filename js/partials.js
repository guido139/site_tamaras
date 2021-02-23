
document.addEventListener("DOMContentLoaded", loadPartials);

function loadPartials() {

  $('#title-container').load('partials/title-content.html')
  $('#top-menu-container').load('partials/top-menu-content.html')
  $('#contato-container').load('partials/contato-content.html')
  $('#footer-container').load('partials/footer-content.html')


}

function ativaMenu(ativateId) {
  $(ativateId).addClass('active');
}
