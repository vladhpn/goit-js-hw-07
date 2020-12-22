const allCategoriesRef = document.querySelectorAll('.item');

console.log(`В списке ${allCategoriesRef.length} категории.`);

// // const allCategoriesArray = [...allCategoriesRef]
// //   .map(
// //     categories => `Категория: ${categories.children[0].textContent}
// // Количество элементов: ${categories.children[1].children.length}`,
// //   )
// //   .join('\n');
// // console.log(allCategoriesArray);

const categoriesListRef = function (items) {
  items.forEach(item => {
    const title = item.querySelector('h2');
    const itemCount = item.querySelectorAll('li');
    console.log(`Категория: ${title.textContent}`);
    console.log(`Количество элементов: ${itemCount.length}`);
  });
};
categoriesListRef(allCategoriesRef);
