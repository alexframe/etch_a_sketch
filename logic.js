// Create 16x16 divs
let whichColor = "blue";
const divContainer = document.getElementById("divContainer");
const colorPicker = document.getElementById("color-pick").addEventListener("click", userColor);
const randomColor = document.getElementById("random-color").addEventListener("click", getRandomColor);
//const totalRandom = document.getElementById("always-random-color").addEventListener("click", alwaysRandom);

// const button = document.getElementById("btn").addEventListener("click", generateGrid);

function initialGrid() {
  let numberOfSquares = 16 * 16;
  for (let i = 0; i < numberOfSquares; i++) {
    const divGrid = document.createElement("div");
    divGrid.classList.add("grid");
    divContainer.setAttribute(
      "style",
      "grid-template-columns: repeat(16, 1fr); grid-template-rows: repeat(16, 1fr);"
    );
    divContainer.appendChild(divGrid);
    unRandom();
    changeBackground(whichColor);
  }
}

initialGrid();

let clear = document
  .getElementById("clear-grid")
  .addEventListener("click", generateGrid);

function generateGrid() {
  usersChoice = prompt(
    "How big would you like to make the grid? (e.g. for 16 by 16, input 16)"
  );
  console.log(usersChoice);
  if (isNaN(usersChoice)) {
    usersChoice = alert("Please enter a number value");
  } else {
    clearGrid();
    gridSize = usersChoice * usersChoice;
    for (let i = 0; i < gridSize; i++) {
      const divGrid = document.createElement("div");
      divGrid.classList.add("grid");
      divContainer.style.gridTemplateColumns =
        "repeat(" + usersChoice + ", 1fr)";
      divContainer.style.gridTemplateRows = "repeat(" + usersChoice + ", 1fr)";
      divContainer.appendChild(divGrid);
      unRandom();
      changeBackground(whichColor);
    }
  }
}

function changeBackground(whichColor) {
  [...document.querySelectorAll(".grid")].forEach(grid => {
    grid.addEventListener("mouseover", function() {
      grid.style.backgroundColor = whichColor;
    });
  });
}

function clearGrid() {
  let toRemove = document.getElementsByClassName("grid");
  while (toRemove.length > 0) {
    toRemove[0].parentNode.removeChild(toRemove[0]);
  }
}

function userColor () {
    changeColor = prompt("Which color would you like to use? (e.g. Blue, #000CFF, rgb(0, 12, 255)");
    changeBackground(changeColor);
}

function getRandomColor() {
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    changeBackground(color);
  }

/*function alwaysRandom (){
    if (document.getElementById("always-random-color").checked) {
        [...document.querySelectorAll(".grid")].forEach(grid => {
            grid.addEventListener("mouseover", function() {
              grid.style.backgroundColor = getRandomColor();
            });
          });
        }
    }*/

function unRandom () {
    document.getElementById("always-random-color").checked = false;
}