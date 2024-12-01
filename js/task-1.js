// 'use strict';

console.log(`Number of categories: ${categories.childElementCount}`);

const categoryList = document.querySelectorAll('h2');

categoryList.forEach(el => {
  console.log(
    `Category: ${el.textContent}\nElements: ${el.nextElementSibling.childElementCount}`
  );
});
