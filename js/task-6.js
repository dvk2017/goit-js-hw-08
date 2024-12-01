function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const num = document.querySelector('.input');
const createBtn = document.querySelector('.cr-btn');
const destroyBtn = document.querySelector('.dsr-btn');

createBtn.addEventListener('click', create);
destroyBtn.addEventListener('click', destroy);

function create(evt) {
  if (num.value > 0 && num.value < 101) {
    createBoxes(num.value);
  }
  num.value = '';
}

function destroy(evt) {
  boxes.innerHTML = '';
}

function createBoxes(amount) {
  let markup = '';
  for (let i = 0; i < amount; i++) {
    markup += ` <div
          style="
            display: block;
            width: ${30 + i * 10}px;
            height: ${30 + i * 10}px;
            background-color: ${getRandomHexColor()};
          "
        ></div>`;
  }
  boxes.innerHTML = markup;
}
