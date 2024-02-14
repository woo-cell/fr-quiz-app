function createMainScreenElement() {
    // create the main screen div element
    const mainScreen = document.createElement("div");
    mainScreen.classList.add("main-screen");

    // create the logo div element
    const logoContainer = document.createElement("div");
    const gameTitle = document.createElement("h1");
    const slogan = document.createElement("p");
    logoContainer.classList.add("logo-container");
    gameTitle.classList.add("game-title");
    slogan.classList.add("slogan");
    gameTitle.textContent = "Trivia";
    slogan.textContent = "Quiz App: Challenge your Knowledge";
    
    // create the begin button
    const startButton = document.createElement("button");
    startButton.classList.add("start-button");
    startButton.textContent = "Begin";

    // append each element
    logoContainer.appendChild(gameTitle);
    logoContainer.appendChild(slogan);
    mainScreen.appendChild(logoContainer);
    mainScreen.appendChild(startButton);

    return mainScreen;
}

export {createMainScreenElement};