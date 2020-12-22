const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const createLiItem = ingredient => {
  const ingredientItemRef = document.createElement('li');
  ingredientItemRef.textContent = ingredient;
  return ingredientItemRef;
};
const ingredientsItems = ingredients.map(ingredient =>
  createLiItem(ingredient),
);
const ingredientsRef = document.querySelector('#ingredients');
ingredientsRef.append(...ingredientsItems);
