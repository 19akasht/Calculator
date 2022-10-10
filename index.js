let screen = document.querySelector("#screen");
let btns = document.querySelectorAll(".btn");

const calculate = (num) => {
  screen.value += num;
};

const equalto = () => {
  screen.value = eval(screen.value);
};

const reset = () => {
  screen.value = " ";
};

const del = () => {
  screen.value = screen.value.slice(0, -1);
};

document.getElementById("screen").addEventListener("keypress", (input) => {
  if (input.keyCode == 13) {
    screen.value = eval(screen.value);
  }
});

document.getElementById("toggle").addEventListener("click", () => {
  document.getElementById("toggle-theme").classList.add("toggle-theme");
  document.getElementById("toggle").style.padding = "3px 7px";
  document.getElementById("toggle").style.border = "1px solid var(--white)";
  document.getElementById("toggle1").style.border = "none";
});

document.getElementById("toggle1").addEventListener("click", () => {
  document.getElementById("toggle-theme").classList.remove("toggle-theme");
  document.getElementById("toggle1").style.border = "1px solid var(--white)";
  document.getElementById("toggle").style.border = "none";
});
