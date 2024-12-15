// const listArray = document.querySelectorAll("li.item");

// let message = "";
// for (const list of listArray) {
//   const listTitle = list.firstElementChild.textContent;
//   const countItems = list.lastElementChild.children.length;
//   message += `Категорія: ${listTitle}, Кількість елементів: ${countItems}. `;
// }

// console.log(message);

////////////////////////////////////////////////////////////////////////

const ingredients = [
  "Картопля",
  "Гриби",
  "Часник",
  "Помідори",
  "Зелень",
  "Приправи",
];

const listElement = document.querySelector("#ingredients");

for (const i of ingredients) {
  listElement.insertAdjacentHTML("beforeend", `<li>${i}</li>`);
}

////////////////////////////////////////////////////////////////////////

const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

const listElement2 = document.querySelector("#gallery");

for (const { url, alt } of images) {
  listElement2.insertAdjacentHTML(
    "beforeend",
    `<li>
        <img src="${url}" alt="${alt}">
    </li>`
  );
}

////////////////////////////////////////////////////////////////////////

let counterValue = 0;
const textElement = document.querySelector("value");

const increment = function (counterValue, textElement) {
  counterValue += 1;
  textElement.textContent = counterValue;
};

const decrement = function (counterValue, textElement) {
  counterValue -= 1;
  textElement.textContent = counterValue;
};
