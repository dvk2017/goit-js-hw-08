const input = document.querySelector('#name-input');
input.addEventListener('input', getName);

const userName = document.querySelector('#name-output');

function getName(evt) {
  userName.textContent =
    evt.target.value.trim() !== '' ? evt.target.value.trim() : 'Anonymous';
}
