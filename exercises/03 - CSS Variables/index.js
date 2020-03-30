const inputs = Array.from(document.querySelectorAll(".controls input"));

function handleUpdate() {
  const suffix = this.dataset.sizing || ""; // "" for color one.
  // console.log(this.dataset); //dataset take everything "data-..." on that element and put it in an object.
  document.documentElement.style.setProperty(
    `--${this.name}`,
    this.value + suffix
  );
}

inputs.map(input => input.addEventListener("change", handleUpdate));
inputs.map(input => input.addEventListener("mousemove", handleUpdate));
