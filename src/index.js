import { createMainScreenElement } from "./createMainScreenElement";

const mainContainer = document.querySelector(".main-container");

init();



function init() {
    mainContainer.appendChild(createMainScreenElement());
}

// begin button event handler
const startButton = document.querySelector(".start-button");
startButton.addEventListener("click", () => {
    begin();
});
