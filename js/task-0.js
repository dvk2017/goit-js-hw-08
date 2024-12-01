'use strict';

// const button = document.querySelector('.my-button');

// const handleClick = event => {
//   console.log(event);
//   console.log(event.type);
//   console.log(event.currentTarget);
// };

// button.addEventListener('click', handleClick);

// document.addEventListener('keydown', event => {
//   console.log('Keydown: ', event);
//   console.log(event.type);
//   console.log(event.currentTarget);
// });

// document.addEventListener('keyup', event => {
//   console.log('Keyup: ', event);
//   console.log(event.type);
//   console.log(event.currentTarget);
// });

const input = document.querySelector('.input');
const text = document.querySelector('.js-text');

const num = 25;
input.addEventListener('input', evt => {
  onInput(evt, num);
});
function onInput(evt, num) {
  text.textContent = evt.target.value + num;
  console.dir(evt.target);
}

input.addEventListener('blur', alertMesage);

function alertMesage(evt) {
  alert(`Attention!!! ${evt.target.value}`);
}

class Storage {
  #items = [];

  constructor(items) {
    this.#items = items;
  }

  getItems() {
    return this.#items;
  }

  addItem(newItem) {
    this.#items.push(newItem);
  }

  removeItem(itemToRemove) {
    for (let i = 0; i < this.#items.length; i++) {
      if (this.#items[i] === itemToRemove) {
        this.#items.splice(i, 1);
        break;
      }
    }
  }
}

const storage = new Storage(['Nanitoids', 'Prolonger', 'Antigravitator']);
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]

storage.addItem('Droid');
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]

storage.removeItem('Prolonger');
console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]

storage.removeItem('Scaner');
console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]
