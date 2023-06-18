// const sumbitButton = document.querySelector("button");

// console.log(sumbitButton);

// sumbitButton.addEventListener("click", (e) => {
//   alert("Hello world");
// });

// const input1 = document.querySelector(".input1");
// const input2 = document.querySelector(".input2");
// const input3 = document.querySelector(".input3");
// const sumbitButton = document.querySelector("button");
// const resultTag = document.querySelector("h4");

// let inputValue1 = "";
// let inputValue2 = "";
// let inputValue3 = "";

// let result = "";

// input1.addEventListener("change", (e) => {
//   inputValue1 = e.target.value;
// });

// input2.addEventListener("change", (e) => {
//   inputValue2 = e.target.value;
// });

// input3.addEventListener("change", (e) => {
//   inputValue3 = e.target.value;
// });

// sumbitButton.addEventListener("click", (e) => {
//   if (inputValue3 === "+") {
//     result = +inputValue1 + +inputValue2;

//     resultTag.innerHTML = result;
//   } else if (inputValue3 === "-") {
//     result = +inputValue1 - +inputValue2;

//     resultTag.innerHTML = result;
//   } else if (inputValue3 === "*") {
//     result = +inputValue1 * +inputValue2;

//     resultTag.innerHTML = result;
//   } else if (inputValue3 === "/") {
//     result = +inputValue1 / +inputValue2;

//     resultTag.innerHTML = result;
//   } else {
//     alert("Error");
//   }

//   input1.value = "";
//   input2.value = "";
// });

// const input = document.querySelector(".input");
// const box = document.querySelector(".box");
// const sumbitButton = document.querySelector("button");

// let inputColor = "red";

// input.addEventListener("change", (e) => {
//   inputColor = e.target.value;
// });

// sumbitButton.addEventListener("click", (e) => {
//   box.style.background = inputColor;

//   if (box.style.background !== inputColor) {
//     alert("Пожалуйста введите правильный цвет");
//   }
// }

const box = document.querySelector(".box");

const colorNames = [
  "AliceBlue",
  "AntiqueWhite",
  "Aqua",
  "Aquamarine",
  "Azure",
  "Beige",
  "Bisque",
  "Black",
  "BlanchedAlmond",
  "Blue",
  "BlueViolet",
  "Brown",
  "BurlyWood",
  "CadetBlue",
  "Chartreuse",
  "Chocolate",
  "Coral",
  "CornflowerBlue",
  "Cornsilk",
  "Crimson",
  "Cyan",
  "DarkBlue",
  "DarkCyan",
];

function getRandomColor() {
  const randColor = Math.floor(Math.random() * colorNames.length);
  return colorNames[randColor];
}

function setColor(box) {
  const color = getRandomColor();
  box.style.background = color;
}

box.addEventListener("mouseover", (event) => {
  setColor(box);
});

onmouseover = (event) => {};
