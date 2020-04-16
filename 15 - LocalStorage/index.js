const addItems = document
  .querySelector(".add-items")
  .addEventListener("submit", addItem);

const itemsList = document.querySelector(".plates");
const items = [];

function addItem(e) {
  e.preventDefault();
  // console.log("ahoj");
  // console.log(this);
  const text = this.querySelector('[name="item"]').value;

  const item = {
    text,
    done: false,
  };

  // console.log(item);
  items.push(item);
  popularity(items, itemsList);
  localStorage.setItem("items", items);
  this.reset();

  // console.log(items);
}

function popularity(dishes = [], dishesList) {
  dishesList.innerHTML = dishes
    .map((dish, i) => {
      return `
        <li>
          <input type="checkbox" data-index=${i} id="item${i}" ${
        dish.done ? "checked" : ""
      } />
          <label for="item${i}">${dish.text}</label>
        </li>`;
    })
    .join("");
}
