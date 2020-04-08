const checkboxes = document.querySelectorAll("input[type=checkbox]");

let lastChecked;

function handleCheck(e) {
  // if (e.shiftKey) {
  //   alert("The SHIFT key was pressed!");
  // } else {
  //   alert("The SHIFT key was NOT pressed!");
  // }
  let inBetween = false;
  if (e.shiftKey && this.checked) {
    checkboxes.forEach((checkbox) => {
      console.log(checkbox);
      if (checkbox === this || checkbox === lastChecked) {
        inBetween = !inBetween; //means => inBetween = true
        console.log("starting");
      }
      if (inBetween) {
        checkbox.checked = true;
      }
    });
  }
  lastChecked = this;
}

checkboxes.forEach((checkbox) =>
  checkbox.addEventListener("click", handleCheck)
);

// checkboxes.forEach((checkbox) =>
//   checkbox.addEventListener("change", handleCheck)
// );
