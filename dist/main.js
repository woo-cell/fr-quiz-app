/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/createGameOverScreenElement.js":
/*!********************************************!*\
  !*** ./src/createGameOverScreenElement.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createGameOverScreenElement: () => (/* binding */ createGameOverScreenElement)
/* harmony export */ });
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



/***/ }),

/***/ "./src/createMainScreenElement.js":
/*!****************************************!*\
  !*** ./src/createMainScreenElement.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createMainScreenElement: () => (/* binding */ createMainScreenElement)
/* harmony export */ });
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



/***/ }),

/***/ "./src/getData.js":
/*!************************!*\
  !*** ./src/getData.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getData: () => (/* binding */ getData)
/* harmony export */ });
async function getData() {
    try {
        const response = await fetch("https://opentdb.com/api.php?amount=10&type=multiple", { mode : "cors" });
        return response;
    } catch (error) {
        console.log(error);
    }
}



/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _createMainScreenElement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createMainScreenElement */ "./src/createMainScreenElement.js");
/* harmony import */ var _getData__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getData */ "./src/getData.js");
/* harmony import */ var _createGameOverScreenElement__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./createGameOverScreenElement */ "./src/createGameOverScreenElement.js");




const mainContainer = document.querySelector(".main-container");
let questionCounter = 0;
let correctCounter = 0;
let qArray = [];

init();

function incrementQuestionCounter() {
    questionCounter ++;
    return questionCounter;
}

function init() {
    correctCounter = 0;
    mainContainer.innerHTML = "";
    mainContainer.appendChild((0,_createMainScreenElement__WEBPACK_IMPORTED_MODULE_0__.createMainScreenElement)());
    
}

// begin button event handler
const startButton = document.querySelector(".start-button");
startButton.addEventListener("click", () => {
    begin();
});


//
async function begin() {
    try {
        const response = await (0,_getData__WEBPACK_IMPORTED_MODULE_1__.getData)();
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
    console.log(qArray)
    return questionsArray;
;
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
    category.textContent = `${obj.category}`;
    questionContainer.appendChild(category);
    
    const difficulty = document.createElement("p");
    difficulty.classList.add("difficulty");
    difficulty.textContent = `difficulty: ${(obj.difficulty).toUpperCase()}`;
    questionContainer.appendChild(difficulty);

    const question = document.createElement("p");
    question.classList.add("question");
    question.textContent = `${obj.question}`;
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
        label.setAttribute("for",`${index}`);
        label.setAttribute("data-value", `${index}`);
        label.textContent = choice;
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
    let m = arr.length; let t; let i;

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
};

function checkIfCorrect(e) {
    console.log(e.target.textContent);
    if (e.target.textContent === qArray[questionCounter].correct_answer) {

        console.log("correct");
        e.target.classList.add("right");

        disableChoices();


        correctCounter++;
    } else {
        e.target.classList.add("wrong");
        
        // finding the "right element" and making it green
        const choiceList = document.querySelectorAll(".choice");
        const choiceListArr = Array.from(choiceList);
        const index = choiceListArr.findIndex((element) => element.lastChild.textContent === qArray[questionCounter].correct_answer);
        choiceListArr[index].lastChild.classList.add("right");

        disableChoices();


        console.log("incorrect");
    }
}

function updateQuestionUI(e) {
    checkIfCorrect(e);
    if (questionCounter<9) {
        setTimeout(() => {
            populateQuestion(qArray[incrementQuestionCounter()])
        },3000);
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
    mainContainer.appendChild((0,_createGameOverScreenElement__WEBPACK_IMPORTED_MODULE_2__.createGameOverScreenElement)(correctCounter));
    correctCounter = 0;
    questionCounter = 0;    

    const startButton = document.querySelector(".start-button");
    startButton.addEventListener("click", () => {
    begin();
    });
}
// listen to user input
// const proposedAnswers = document.querySelectorAll("input");
// const proposedAnswersArray = Array.from(proposedAnswers);
// proposedAnswersArray.forEach((proposedAnswer) => {
//     proposedAnswer.addEventListener("checked", () => {
//         incrementQuestionCounter();
//     });
// });


})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOEJBQThCLHlGQUEyQjtBQUN6RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1IsSUFBSTtBQUNKIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VicGFjay12YW5pbGxhLWpzLXRlbXBsYXRlLy4vc3JjL2NyZWF0ZUdhbWVPdmVyU2NyZWVuRWxlbWVudC5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXZhbmlsbGEtanMtdGVtcGxhdGUvLi9zcmMvY3JlYXRlTWFpblNjcmVlbkVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay12YW5pbGxhLWpzLXRlbXBsYXRlLy4vc3JjL2dldERhdGEuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay12YW5pbGxhLWpzLXRlbXBsYXRlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3dlYnBhY2stdmFuaWxsYS1qcy10ZW1wbGF0ZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vd2VicGFjay12YW5pbGxhLWpzLXRlbXBsYXRlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vd2VicGFjay12YW5pbGxhLWpzLXRlbXBsYXRlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vd2VicGFjay12YW5pbGxhLWpzLXRlbXBsYXRlLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIGNyZWF0ZUdhbWVPdmVyU2NyZWVuRWxlbWVudChzY29yZSkge1xyXG4gICAgLy8gY3JlYXRlIHRoZSBtYWluIHNjcmVlbiBkaXYgZWxlbWVudFxyXG4gICAgY29uc3QgbWFpblNjcmVlbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBtYWluU2NyZWVuLmNsYXNzTGlzdC5hZGQoXCJtYWluLXNjcmVlblwiKTtcclxuXHJcbiAgICAvLyBjcmVhdGUgdGhlIHNjb3JlIGVsZW1lbnRcclxuICAgIGNvbnN0IHNjb3JlRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xyXG4gICAgc2NvcmVFbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJzY29yZVwiKTtcclxuICAgIHNjb3JlRWxlbWVudC50ZXh0Q29udGVudCA9IGAke3Njb3JlfS8xMGBcclxuICAgIGNvbnN0IHNjb3JlRmVlZGJhY2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcclxuICAgIHNjb3JlRmVlZGJhY2sudGV4dENvbnRlbnQgPSBnZXRTY29yZUZlZWRiYWNrKHNjb3JlKTtcclxuICAgIFxyXG4gICAgLy8gY3JlYXRlIHRoZSByZXRyeSBidXR0b25cclxuICAgIGNvbnN0IHN0YXJ0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcclxuICAgIHN0YXJ0QnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJzdGFydC1idXR0b25cIik7XHJcbiAgICBzdGFydEJ1dHRvbi50ZXh0Q29udGVudCA9IFwiUmV0cnlcIjtcclxuXHJcbiAgICAvLyBhcHBlbmQgZWFjaCBlbGVtZW50XHJcbiAgICBtYWluU2NyZWVuLmFwcGVuZENoaWxkKHNjb3JlRWxlbWVudCk7XHJcbiAgICBtYWluU2NyZWVuLmFwcGVuZENoaWxkKHNjb3JlRmVlZGJhY2spO1xyXG4gICAgbWFpblNjcmVlbi5hcHBlbmRDaGlsZChzdGFydEJ1dHRvbik7XHJcblxyXG4gICAgcmV0dXJuIG1haW5TY3JlZW47XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldFNjb3JlRmVlZGJhY2soc2NvcmUpIHtcclxuICAgIGlmIChzY29yZSA8IDAgfHwgc2NvcmUgPiAxMCkge1xyXG4gICAgICByZXR1cm4gXCJJbnZhbGlkIHNjb3JlLiBQbGVhc2UgcHJvdmlkZSBhIHNjb3JlIGJldHdlZW4gMCBhbmQgMTAuXCI7XHJcbiAgICB9IGlmIChzY29yZSA8IDQpIHtcclxuICAgICAgcmV0dXJuIFwiWW91IGhhdmUgcm9vbSBmb3IgaW1wcm92ZW1lbnQuXCI7XHJcbiAgICB9IGlmIChzY29yZSA8IDcpIHtcclxuICAgICAgcmV0dXJuIFwiWW91J3JlIGRvaW5nIGFscmlnaHQuXCI7XHJcbiAgICB9IGlmIChzY29yZSA8IDkpIHtcclxuICAgICAgcmV0dXJuIFwiV2VsbCBkb25lIVwiO1xyXG4gICAgfSBcclxuICAgICAgcmV0dXJuIFwiWW91J3JlIGEgc3RhciFcIjtcclxuICAgIFxyXG4gIH1cclxuXHJcbmV4cG9ydCB7Y3JlYXRlR2FtZU92ZXJTY3JlZW5FbGVtZW50fTsiLCJmdW5jdGlvbiBjcmVhdGVNYWluU2NyZWVuRWxlbWVudCgpIHtcclxuICAgIC8vIGNyZWF0ZSB0aGUgbWFpbiBzY3JlZW4gZGl2IGVsZW1lbnRcclxuICAgIGNvbnN0IG1haW5TY3JlZW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgbWFpblNjcmVlbi5jbGFzc0xpc3QuYWRkKFwibWFpbi1zY3JlZW5cIik7XHJcblxyXG4gICAgLy8gY3JlYXRlIHRoZSBsb2dvIGRpdiBlbGVtZW50XHJcbiAgICBjb25zdCBsb2dvQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIGNvbnN0IGdhbWVUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcclxuICAgIGNvbnN0IHNsb2dhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xyXG4gICAgbG9nb0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwibG9nby1jb250YWluZXJcIik7XHJcbiAgICBnYW1lVGl0bGUuY2xhc3NMaXN0LmFkZChcImdhbWUtdGl0bGVcIik7XHJcbiAgICBzbG9nYW4uY2xhc3NMaXN0LmFkZChcInNsb2dhblwiKTtcclxuICAgIGdhbWVUaXRsZS50ZXh0Q29udGVudCA9IFwiVHJpdmlhXCI7XHJcbiAgICBzbG9nYW4udGV4dENvbnRlbnQgPSBcIlF1aXogQXBwOiBDaGFsbGVuZ2UgeW91ciBLbm93bGVkZ2VcIjtcclxuICAgIFxyXG4gICAgLy8gY3JlYXRlIHRoZSBiZWdpbiBidXR0b25cclxuICAgIGNvbnN0IHN0YXJ0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcclxuICAgIHN0YXJ0QnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJzdGFydC1idXR0b25cIik7XHJcbiAgICBzdGFydEJ1dHRvbi50ZXh0Q29udGVudCA9IFwiQmVnaW5cIjtcclxuXHJcbiAgICAvLyBhcHBlbmQgZWFjaCBlbGVtZW50XHJcbiAgICBsb2dvQ29udGFpbmVyLmFwcGVuZENoaWxkKGdhbWVUaXRsZSk7XHJcbiAgICBsb2dvQ29udGFpbmVyLmFwcGVuZENoaWxkKHNsb2dhbik7XHJcbiAgICBtYWluU2NyZWVuLmFwcGVuZENoaWxkKGxvZ29Db250YWluZXIpO1xyXG4gICAgbWFpblNjcmVlbi5hcHBlbmRDaGlsZChzdGFydEJ1dHRvbik7XHJcblxyXG4gICAgcmV0dXJuIG1haW5TY3JlZW47XHJcbn1cclxuXHJcbmV4cG9ydCB7Y3JlYXRlTWFpblNjcmVlbkVsZW1lbnR9OyIsImFzeW5jIGZ1bmN0aW9uIGdldERhdGEoKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXCJodHRwczovL29wZW50ZGIuY29tL2FwaS5waHA/YW1vdW50PTEwJnR5cGU9bXVsdGlwbGVcIiwgeyBtb2RlIDogXCJjb3JzXCIgfSk7XHJcbiAgICAgICAgcmV0dXJuIHJlc3BvbnNlO1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCB7Z2V0RGF0YX07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgeyBjcmVhdGVNYWluU2NyZWVuRWxlbWVudCB9IGZyb20gXCIuL2NyZWF0ZU1haW5TY3JlZW5FbGVtZW50XCI7XHJcbmltcG9ydCB7IGdldERhdGEgfSBmcm9tIFwiLi9nZXREYXRhXCI7XHJcbmltcG9ydCB7IGNyZWF0ZUdhbWVPdmVyU2NyZWVuRWxlbWVudCB9IGZyb20gXCIuL2NyZWF0ZUdhbWVPdmVyU2NyZWVuRWxlbWVudFwiO1xyXG5cclxuY29uc3QgbWFpbkNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWFpbi1jb250YWluZXJcIik7XHJcbmxldCBxdWVzdGlvbkNvdW50ZXIgPSAwO1xyXG5sZXQgY29ycmVjdENvdW50ZXIgPSAwO1xyXG5sZXQgcUFycmF5ID0gW107XHJcblxyXG5pbml0KCk7XHJcblxyXG5mdW5jdGlvbiBpbmNyZW1lbnRRdWVzdGlvbkNvdW50ZXIoKSB7XHJcbiAgICBxdWVzdGlvbkNvdW50ZXIgKys7XHJcbiAgICByZXR1cm4gcXVlc3Rpb25Db3VudGVyO1xyXG59XHJcblxyXG5mdW5jdGlvbiBpbml0KCkge1xyXG4gICAgY29ycmVjdENvdW50ZXIgPSAwO1xyXG4gICAgbWFpbkNvbnRhaW5lci5pbm5lckhUTUwgPSBcIlwiO1xyXG4gICAgbWFpbkNvbnRhaW5lci5hcHBlbmRDaGlsZChjcmVhdGVNYWluU2NyZWVuRWxlbWVudCgpKTtcclxuICAgIFxyXG59XHJcblxyXG4vLyBiZWdpbiBidXR0b24gZXZlbnQgaGFuZGxlclxyXG5jb25zdCBzdGFydEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc3RhcnQtYnV0dG9uXCIpO1xyXG5zdGFydEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgYmVnaW4oKTtcclxufSk7XHJcblxyXG5cclxuLy9cclxuYXN5bmMgZnVuY3Rpb24gYmVnaW4oKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZ2V0RGF0YSgpO1xyXG4gICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcbiAgICAgICAgY29uc3QgcXVlc3Rpb25zID0gY3JlYXRlUXVlc3Rpb25zKGRhdGEpO1xyXG4gICAgICAgIHBvcHVsYXRlUXVlc3Rpb24ocXVlc3Rpb25zW3F1ZXN0aW9uQ291bnRlcl0pO1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVRdWVzdGlvbnMob2JqKSB7XHJcbiAgICBjb25zdCBbLi4ucXVlc3Rpb25zQXJyYXldID0gb2JqLnJlc3VsdHM7XHJcbiAgICAvLyBjb25zb2xlLmxvZyhxdWVzdGlvbnNBcnJheSk7XHJcbiAgICBbLi4ucUFycmF5XSA9IHF1ZXN0aW9uc0FycmF5O1xyXG4gICAgY29uc29sZS5sb2cocUFycmF5KVxyXG4gICAgcmV0dXJuIHF1ZXN0aW9uc0FycmF5O1xyXG47XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHBvcHVsYXRlUXVlc3Rpb24ob2JqKSB7XHJcbiAgICAvLyBjb25zb2xlLmxvZyhvYmouY2F0ZWdvcnkpO1xyXG4gICAgbWFpbkNvbnRhaW5lci5pbm5lckhUTUwgPSBcIlwiO1xyXG4gICAgbWFpbkNvbnRhaW5lci5hcHBlbmRDaGlsZChxdWVzdGlvblVJKG9iaikpO1xyXG4gICAgXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZUNob2ljZXMob2JqKSB7XHJcbiAgICAvLyBtYWtlIGFuIGFycmF5IG9mIGluY29ycmVjdCBhbmQgY29ycmVjdCBhbnN3ZXJzXHJcbiAgICBjb25zdCBbLi4uY2hvaWNlc10gPSBvYmouaW5jb3JyZWN0X2Fuc3dlcnM7XHJcbiAgICBjaG9pY2VzLnB1c2gob2JqLmNvcnJlY3RfYW5zd2VyKTtcclxuXHJcbiAgICAvLyBzaHVmZmxlIHRoZSBhcnJheSB1c2luZyBLbnV0aCBTaHVmZmxlXHJcbiAgICBjb25zdCBzaHVmZmxlZCA9IHNodWZmbGUoY2hvaWNlcyk7XHJcblxyXG4gICAgcmV0dXJuIHNodWZmbGVkO1xyXG59XHJcblxyXG5mdW5jdGlvbiBxdWVzdGlvblVJKG9iaikge1xyXG4gICAgLy8gY3JlYXRlIHF1ZXN0aW9uIGNvbnRhaW5lciBlbGVtZW50IFxyXG4gICAgY29uc3QgcXVlc3Rpb25Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgcXVlc3Rpb25Db250YWluZXIuY2xhc3NMaXN0LmFkZChcInF1ZXN0aW9uLWNvbnRhaW5lclwiKTtcclxuXHJcbiAgICAvLyBjcmVhdGUgdGhlIGNvbnRlbnQgb2YgdGhlIGNvbnRhaW5lclxyXG4gICAgY29uc3QgY2F0ZWdvcnkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDNcIik7XHJcbiAgICBjYXRlZ29yeS5jbGFzc0xpc3QuYWRkKFwiY2F0ZWdvcnlcIik7XHJcbiAgICBjYXRlZ29yeS50ZXh0Q29udGVudCA9IGAke29iai5jYXRlZ29yeX1gO1xyXG4gICAgcXVlc3Rpb25Db250YWluZXIuYXBwZW5kQ2hpbGQoY2F0ZWdvcnkpO1xyXG4gICAgXHJcbiAgICBjb25zdCBkaWZmaWN1bHR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XHJcbiAgICBkaWZmaWN1bHR5LmNsYXNzTGlzdC5hZGQoXCJkaWZmaWN1bHR5XCIpO1xyXG4gICAgZGlmZmljdWx0eS50ZXh0Q29udGVudCA9IGBkaWZmaWN1bHR5OiAkeyhvYmouZGlmZmljdWx0eSkudG9VcHBlckNhc2UoKX1gO1xyXG4gICAgcXVlc3Rpb25Db250YWluZXIuYXBwZW5kQ2hpbGQoZGlmZmljdWx0eSk7XHJcblxyXG4gICAgY29uc3QgcXVlc3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcclxuICAgIHF1ZXN0aW9uLmNsYXNzTGlzdC5hZGQoXCJxdWVzdGlvblwiKTtcclxuICAgIHF1ZXN0aW9uLnRleHRDb250ZW50ID0gYCR7b2JqLnF1ZXN0aW9ufWA7XHJcbiAgICBxdWVzdGlvbkNvbnRhaW5lci5hcHBlbmRDaGlsZChxdWVzdGlvbik7XHJcblxyXG4gICAgLy8gY3JlYXRlIHRoZSBjaG9pY2VzIGFuZCB0aGUgZWxlbWVudHNcclxuICAgIGNvbnN0IGNob2ljZXMgPSBjcmVhdGVDaG9pY2VzKG9iaik7XHJcbiAgICBjaG9pY2VzLmZvckVhY2goKGNob2ljZSwgaW5kZXgpID0+IHtcclxuICAgICAgICBjb25zdCBjaG9pY2VPZkFuc3dlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgY2hvaWNlT2ZBbnN3ZXIuY2xhc3NMaXN0LmFkZChcImNob2ljZVwiKTtcclxuXHJcbiAgICAgICAgY29uc3QgcmFkaW8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XHJcbiAgICAgICAgcmFkaW8udHlwZSA9IFwicmFkaW9cIjtcclxuICAgICAgICByYWRpby5pZCA9IGAke2luZGV4fWA7XHJcbiAgICAgICAgcmFkaW8ubmFtZSA9IFwiY2hvaWNlXCI7XHJcbiAgICAgICAgcmFkaW8udmFsdWUgPSBgJHtpbmRleH1gO1xyXG5cclxuICAgICAgICBjb25zdCBsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcclxuICAgICAgICBsYWJlbC5zZXRBdHRyaWJ1dGUoXCJmb3JcIixgJHtpbmRleH1gKTtcclxuICAgICAgICBsYWJlbC5zZXRBdHRyaWJ1dGUoXCJkYXRhLXZhbHVlXCIsIGAke2luZGV4fWApO1xyXG4gICAgICAgIGxhYmVsLnRleHRDb250ZW50ID0gY2hvaWNlO1xyXG4gICAgICAgIGxhYmVsLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xyXG4gICAgICAgICAgICB1cGRhdGVRdWVzdGlvblVJKGUpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBjaG9pY2VPZkFuc3dlci5hcHBlbmRDaGlsZChyYWRpbyk7XHJcbiAgICAgICAgY2hvaWNlT2ZBbnN3ZXIuYXBwZW5kQ2hpbGQobGFiZWwpO1xyXG4gICAgICAgIHF1ZXN0aW9uQ29udGFpbmVyLmFwcGVuZENoaWxkKGNob2ljZU9mQW5zd2VyKTtcclxuICAgIH0pO1xyXG5cclxuICAgIC8vIGNyZWF0ZSBhIHBsYWNlaG9sZGVyIGVsZW1lbnQgdG8gZGlzcGxheSBjb3JyZWN0IG9yIHdyb25nXHJcbiAgICBjb25zdCBjb3JyZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XHJcbiAgICBjb3JyZWN0LmNsYXNzTGlzdC5hZGQoXCJjb3JyZWN0XCIpO1xyXG4gICAgcXVlc3Rpb25Db250YWluZXIuYXBwZW5kQ2hpbGQoY29ycmVjdCk7XHJcblxyXG4gICAgLy8gcmV0dXJuIHRoZSBjb250YWluZXIgZWxlbWVudFxyXG4gICAgcmV0dXJuIHF1ZXN0aW9uQ29udGFpbmVyO1xyXG59XHJcblxyXG5mdW5jdGlvbiBzaHVmZmxlKGFycikge1xyXG4gICAgbGV0IG0gPSBhcnIubGVuZ3RoOyBsZXQgdDsgbGV0IGk7XHJcblxyXG4gICAgLy8gV2hpbGUgdGhlcmUgcmVtYWluIGVsZW1lbnRzIHRvIHNodWZmbGXigKZcclxuICAgIHdoaWxlIChtKSB7XHJcbiAgICAgIC8vIFBpY2sgYSByZW1haW5pbmcgZWxlbWVudOKAplxyXG4gICAgICBpID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogbS0tKTtcclxuICBcclxuICAgICAgLy8gQW5kIHN3YXAgaXQgd2l0aCB0aGUgY3VycmVudCBlbGVtZW50LlxyXG4gICAgICB0ID0gYXJyW21dO1xyXG4gICAgICBhcnJbbV0gPSBhcnJbaV07XHJcbiAgICAgIGFycltpXSA9IHQ7XHJcbiAgICB9XHJcbiAgXHJcbiAgICByZXR1cm4gYXJyO1xyXG59O1xyXG5cclxuZnVuY3Rpb24gY2hlY2tJZkNvcnJlY3QoZSkge1xyXG4gICAgY29uc29sZS5sb2coZS50YXJnZXQudGV4dENvbnRlbnQpO1xyXG4gICAgaWYgKGUudGFyZ2V0LnRleHRDb250ZW50ID09PSBxQXJyYXlbcXVlc3Rpb25Db3VudGVyXS5jb3JyZWN0X2Fuc3dlcikge1xyXG5cclxuICAgICAgICBjb25zb2xlLmxvZyhcImNvcnJlY3RcIik7XHJcbiAgICAgICAgZS50YXJnZXQuY2xhc3NMaXN0LmFkZChcInJpZ2h0XCIpO1xyXG5cclxuICAgICAgICBkaXNhYmxlQ2hvaWNlcygpO1xyXG5cclxuXHJcbiAgICAgICAgY29ycmVjdENvdW50ZXIrKztcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgZS50YXJnZXQuY2xhc3NMaXN0LmFkZChcIndyb25nXCIpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIC8vIGZpbmRpbmcgdGhlIFwicmlnaHQgZWxlbWVudFwiIGFuZCBtYWtpbmcgaXQgZ3JlZW5cclxuICAgICAgICBjb25zdCBjaG9pY2VMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5jaG9pY2VcIik7XHJcbiAgICAgICAgY29uc3QgY2hvaWNlTGlzdEFyciA9IEFycmF5LmZyb20oY2hvaWNlTGlzdCk7XHJcbiAgICAgICAgY29uc3QgaW5kZXggPSBjaG9pY2VMaXN0QXJyLmZpbmRJbmRleCgoZWxlbWVudCkgPT4gZWxlbWVudC5sYXN0Q2hpbGQudGV4dENvbnRlbnQgPT09IHFBcnJheVtxdWVzdGlvbkNvdW50ZXJdLmNvcnJlY3RfYW5zd2VyKTtcclxuICAgICAgICBjaG9pY2VMaXN0QXJyW2luZGV4XS5sYXN0Q2hpbGQuY2xhc3NMaXN0LmFkZChcInJpZ2h0XCIpO1xyXG5cclxuICAgICAgICBkaXNhYmxlQ2hvaWNlcygpO1xyXG5cclxuXHJcbiAgICAgICAgY29uc29sZS5sb2coXCJpbmNvcnJlY3RcIik7XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHVwZGF0ZVF1ZXN0aW9uVUkoZSkge1xyXG4gICAgY2hlY2tJZkNvcnJlY3QoZSk7XHJcbiAgICBpZiAocXVlc3Rpb25Db3VudGVyPDkpIHtcclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgcG9wdWxhdGVRdWVzdGlvbihxQXJyYXlbaW5jcmVtZW50UXVlc3Rpb25Db3VudGVyKCldKVxyXG4gICAgICAgIH0sMzAwMCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIGdhbWVPdmVyKCk7XHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5mdW5jdGlvbiBkaXNhYmxlQ2hvaWNlcygpIHtcclxuICAgIGNvbnN0IGNob2ljZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmNob2ljZVwiKTtcclxuICAgIGNvbnN0IGNob2ljZXNBcnJheSA9IEFycmF5LmZyb20oY2hvaWNlcyk7XHJcbiAgICBjaG9pY2VzQXJyYXkuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xyXG4gICAgICAgIGVsZW1lbnQuc3R5bGUucG9pbnRlckV2ZW50cyA9IFwibm9uZVwiO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdhbWVPdmVyKCkge1xyXG4gICAgbWFpbkNvbnRhaW5lci5pbm5lckhUTUwgPSBcIlwiO1xyXG4gICAgbWFpbkNvbnRhaW5lci5hcHBlbmRDaGlsZChjcmVhdGVHYW1lT3ZlclNjcmVlbkVsZW1lbnQoY29ycmVjdENvdW50ZXIpKTtcclxuICAgIGNvcnJlY3RDb3VudGVyID0gMDtcclxuICAgIHF1ZXN0aW9uQ291bnRlciA9IDA7ICAgIFxyXG5cclxuICAgIGNvbnN0IHN0YXJ0QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zdGFydC1idXR0b25cIik7XHJcbiAgICBzdGFydEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgYmVnaW4oKTtcclxuICAgIH0pO1xyXG59XHJcbi8vIGxpc3RlbiB0byB1c2VyIGlucHV0XHJcbi8vIGNvbnN0IHByb3Bvc2VkQW5zd2VycyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJpbnB1dFwiKTtcclxuLy8gY29uc3QgcHJvcG9zZWRBbnN3ZXJzQXJyYXkgPSBBcnJheS5mcm9tKHByb3Bvc2VkQW5zd2Vycyk7XHJcbi8vIHByb3Bvc2VkQW5zd2Vyc0FycmF5LmZvckVhY2goKHByb3Bvc2VkQW5zd2VyKSA9PiB7XHJcbi8vICAgICBwcm9wb3NlZEFuc3dlci5hZGRFdmVudExpc3RlbmVyKFwiY2hlY2tlZFwiLCAoKSA9PiB7XHJcbi8vICAgICAgICAgaW5jcmVtZW50UXVlc3Rpb25Db3VudGVyKCk7XHJcbi8vICAgICB9KTtcclxuLy8gfSk7XHJcblxyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=