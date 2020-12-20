const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const ingredientArray = ingredients.map(ingredient => {
  const listRef = document.createElement('li');
  listRef.textContent = ingredient;
  const ingredientsRef = document.querySelector('#ingredients');
  ingredientsRef.appendChild(listRef);
  console.log(listRef);
});
