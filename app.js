let screen = document.querySelector(".screen");
let equal = document.querySelector(".btn-equal");
let clear = document.querySelector(".btn-clear");
let buttons = document.querySelectorAll(".btn");

buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    let value = e.target.dataset.num;
    screen.value += value;
    console.log(value);
  });
});

equal.addEventListener("click", () => {
  screen.value = eval(screen.value);
});

clear.addEventListener("click", () => {
  screen.value = "";
});
