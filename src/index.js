import { createMainScreenElement } from "./createMainScreenElement";
import { getData } from "./getData";
import { createGameOverScreenElement } from "./createGameOverScreenElement";

const mainContainer = document.querySelector(".main-container");
let questionCounter = 0;
let correctCounter = 0;
let qArray = [];

init();

function incrementQuestionCounter() {
  questionCounter++;
  return questionCounter;
}

function init() {
  correctCounter = 0;
  mainContainer.innerHTML = "";
  mainContainer.appendChild(createMainScreenElement());
}

// begin button event handler
const startButton = document.querySelector(".start-button");
startButton.addEventListener("click", () => {
  begin();
});

//
async function begin() {
  try {
    const response = await getData();
    const data = await response.json();
    const questions = createQuestions(data);
    populateQuestion(questions[questionCounter]);
  } catch (error) {
    console.log(error);
  }
}

function createQuestions(obj) {
  const [...questionsArray] = obj.results;
  // console.log(questionsArray);
  [...qArray] = questionsArray;
  console.log(qArray);
  return questionsArray;
}

function populateQuestion(obj) {
  // console.log(obj.category);
  mainContainer.innerHTML = "";
  mainContainer.appendChild(questionUI(obj));
}

function createChoices(obj) {
  // make an array of incorrect and correct answers
  const [...choices] = obj.incorrect_answers;
  choices.push(obj.correct_answer);

  // shuffle the array using Knuth Shuffle
  const shuffled = shuffle(choices);

  return shuffled;
}

function questionUI(obj) {
  // create question container element
  const questionContainer = document.createElement("div");
  questionContainer.classList.add("question-container");

  // create the content of the container
  const category = document.createElement("h3");
  category.classList.add("category");
  category.textContent = `${decode(obj.category)}`;
  questionContainer.appendChild(category);

  const difficulty = document.createElement("p");
  difficulty.classList.add("difficulty");
  difficulty.textContent = `difficulty: ${decode(
    obj.difficulty,
  ).toUpperCase()}`;
  questionContainer.appendChild(difficulty);

  const question = document.createElement("p");
  question.classList.add("question");
  question.textContent = `${decode(obj.question)}`;
  questionContainer.appendChild(question);

  // create the choices and the elements
  const choices = createChoices(obj);
  choices.forEach((choice, index) => {
    const choiceOfAnswer = document.createElement("div");
    choiceOfAnswer.classList.add("choice");

    const radio = document.createElement("input");
    radio.type = "radio";
    radio.id = `${index}`;
    radio.name = "choice";
    radio.value = `${index}`;

    const label = document.createElement("label");
    label.setAttribute("for", `${index}`);
    label.setAttribute("data-value", `${index}`);
    label.textContent = decode(choice);
    label.addEventListener("click", (e) => {
      updateQuestionUI(e);
    });

    choiceOfAnswer.appendChild(radio);
    choiceOfAnswer.appendChild(label);
    questionContainer.appendChild(choiceOfAnswer);
  });

  // create a placeholder element to display correct or wrong
  const correct = document.createElement("p");
  correct.classList.add("correct");
  questionContainer.appendChild(correct);

  // return the container element
  return questionContainer;
}

function shuffle(arr) {
  let m = arr.length;
  let t;
  let i;

  // While there remain elements to shuffle…
  while (m) {
    // Pick a remaining element…
    i = Math.floor(Math.random() * m--);

    // And swap it with the current element.
    t = arr[m];
    arr[m] = arr[i];
    arr[i] = t;
  }

  return arr;
}

function checkIfCorrect(e) {
  console.log(e.target.textContent);
  const cor = qArray[questionCounter].correct_answer;
  if (e.target.textContent === decode(cor)) {
    e.target.classList.add("right");
    disableChoices();
    correctCounter++;
    getAnswerFeedback("correct");
  } else {
    e.target.classList.add("wrong");

    // finding the "right element" and making it green
    const choiceList = document.querySelectorAll(".choice");
    const choiceListArr = Array.from(choiceList);
    const index = choiceListArr.findIndex(
      (element) => element.lastChild.textContent === decode(cor),
    );
    choiceListArr[index].lastChild.classList.add("right");

    disableChoices();

    getAnswerFeedback("incorrect");
    console.log("incorrect");
  }
}

function getAnswerFeedback(str) {
  const answerFeedback = document.querySelector(".correct");
  if (str === "correct") {
    answerFeedback.textContent = "CORRECT";
    answerFeedback.classList.add("right-answer");
  } else {
    answerFeedback.textContent = "INCORRECT";
    answerFeedback.classList.add("wrong-answer");
  }
}

function updateQuestionUI(e) {
  checkIfCorrect(e);
  if (questionCounter < 9) {
    setTimeout(() => {
      populateQuestion(qArray[incrementQuestionCounter()]);
    }, 2500);
  } else {
    gameOver();
  }
}

function disableChoices() {
  const choices = document.querySelectorAll(".choice");
  const choicesArray = Array.from(choices);
  choicesArray.forEach((element) => {
    element.style.pointerEvents = "none";
  });
}

function gameOver() {
  mainContainer.innerHTML = "";
  mainContainer.appendChild(createGameOverScreenElement(correctCounter));
  correctCounter = 0;
  questionCounter = 0;

  // retry button event handler
  const startButton = document.querySelector(".start-button");
  startButton.addEventListener("click", () => {
    begin();
  });
}

function decode(data) {
  const tempElement = document.createElement("div");
  tempElement.innerHTML = data;
  const decoded = tempElement.textContent;
  return decoded;
}

// listen to user input
// const proposedAnswers = document.querySelectorAll("input");
// const proposedAnswersArray = Array.from(proposedAnswers);
// proposedAnswersArray.forEach((proposedAnswer) => {
//     proposedAnswer.addEventListener("checked", () => {
//         incrementQuestionCounter();
//     });
// });
