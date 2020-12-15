const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const listRef = document.createElement('li');

listRef.textContent = ingredients;
console.log(listRef);

const ingredientsRef = document.querySelector('#ingredients');

ingredientsRef.appendChild(listRef);

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
const product = [];

const ingredientArray = [...ingredients].map(ingredient =>
  product.push(ingredient),
);
console.log(product);

// const createIngredientsList = product =>;
