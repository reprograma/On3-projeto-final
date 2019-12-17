// Modal Sobre a Autora

const modal = document.getElementById('autora_modal');
const modalBtn = document.getElementById('secao-autora__btn');
const closeBtn = document.querySelector('.close');

modalBtn.addEventListener('click', openModal);
closeBtn.addEventListener('click', closeModal);
window.addEventListener('click', outsideClick);

function openModal() {
  modal.style.display = 'block';
}

function closeModal() {
  modal.style.display = 'none';
}

function outsideClick(e) {
  if (e.target == modal) {
    modal.style.display = 'none';
  }
}