const allCategoriesRef = document.querySelectorAll('.item');

console.log(`В списке ${allCategoriesRef.length} категории.`);

const allCategoriesArray = [...allCategoriesRef]
  .map(
    categories => `Категория: ${categories.children[0].textContent}
Количество элементов: ${categories.children[1].children.length}`,
  )
  .join('\n');
console.log(allCategoriesArray);
