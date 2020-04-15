const addItems = document
  .querySelector(".add-items")
  .addEventListener("submit", addItem);

const itemsList = document.querySelector(".plates");
const items = [];

function addItem(e) {
  e.preventDefault();
  // console.log("ahoj");
  console.log(this);

  const item = {
    text: "name",
    done: false,
  };
}
