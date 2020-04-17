const addItems = document.querySelector(".add-items");
const itemsList = document.querySelector(".plates");
const items = JSON.parse(localStorage.getItem("items")) || [];

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
  localStorage.setItem("items", JSON.stringify(items));
  // console.log(localStorage.getItem("items"));
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

function toggleDone(e) {
  if (!e.target.matches("input")) return;
  console.log(e.target);
  const el = e.target;
  const index = el.dataset.index;
  items[index].done = !items[index].done;
  localStorage.setItem("items", JSON.stringify(items));
  popularity(items, itemsList);
}

popularity(items, itemsList);

addItems.addEventListener("submit", addItem);
itemsList.addEventListener("click", toggleDone);
