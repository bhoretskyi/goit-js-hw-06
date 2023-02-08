const categoryList = document.querySelector("#categories");

const listEl = categoryList.querySelectorAll(".item");

const listElLength = listEl.length;

console.log(`Number of categories: ${listElLength}`);

listEl.forEach(function (element) {
  console.log("Category:", element.firstElementChild.textContent);
  console.log("Elements:", element.lastElementChild.children.length);
});
