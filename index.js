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



// btn.addEventListener("click", async () => {
//   const url = await fetch("https://jsonplaceholder.typicode.com/photos");
//   const items = await url.json();
//   display(items);
//   console.log(items);
// });

// function display(items) {
//   items.forEach((item) => {
//     createItem(item);
//   });
// }

// function createItem(item) {
//   const card = document.createElement("div");
//   card.style.marginTop = "20px";
//   card.style.border = "2px solid black";
//   const photo = document.createElement("img");
//   const heading = document.createElement("h1");

//   photo.src = item.thumbnailUrl;
//   heading.innerHTML = item.title;

//   root.append(card);
//   card.append(photo);
//   card.append(heading);
// }
