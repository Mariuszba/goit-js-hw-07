const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ul = document.querySelector('#ingredients')

ingredients.forEach((element) => {
  const listElements = document.createElement("li");
  listElements.className = "item";
  listElements.textContent = element;
  ul?.appendChild(listElements);
})
