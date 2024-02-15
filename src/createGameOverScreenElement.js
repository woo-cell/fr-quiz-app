function createGameOverScreenElement(score) {
    // create the main screen div element
    const mainScreen = document.createElement("div");
    mainScreen.classList.add("main-screen");

    // create the score element
    const scoreElement = document.createElement("p");
    scoreElement.classList.add("score");
    scoreElement.textContent = `${score}/10`
    const scoreFeedback = document.createElement("p");
    scoreFeedback.textContent = getScoreFeedback(score);
    
    // create the retry button
    const startButton = document.createElement("button");
    startButton.classList.add("start-button");
    startButton.textContent = "Retry";

    // append each element
    mainScreen.appendChild(scoreElement);
    mainScreen.appendChild(scoreFeedback);
    mainScreen.appendChild(startButton);

    return mainScreen;
}

function getScoreFeedback(score) {
    if (score < 0 || score > 10) {
      return "Invalid score. Please provide a score between 0 and 10.";
    } if (score < 4) {
      return "You have room for improvement.";
    } if (score < 7) {
      return "You're doing alright.";
    } if (score < 9) {
      return "Well done!";
    } 
      return "You're a star!";
    
  }

export {createGameOverScreenElement};