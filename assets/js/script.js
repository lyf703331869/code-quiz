// Dependencies =======================================
var startBtn = document.querySelector(".start");
var startPage = document.querySelector(".startPage");
var main = document.querySelector("main");
var quizQuestionPage = document.querySelector(".quizQuestion");
var timeEl = document.querySelector(".timer");
var ansReveal = document.querySelector(".answerReveal");
var enterInitials = document.querySelector(".enter-initials");
var submitBtn = document.querySelector("#submit-button");
var warning = document.querySelector("#warning");
var highScorePage = document.querySelector(".highscore");
var highScoreList = document.querySelector(".highscoreList");
var li = document.createElement("li");
var clearHistory = document.querySelector("#clearHighscore");
var returnHome = document.querySelector("#returnHome");
var highScoreBtn = document.querySelector(".highScoreBtn");

// Starting Data ========================================
var timeLeft = 100;
var i = 0;
var scoreHistoryArray = [];
// Add questions
var questionChar1 = {
  question: "1. Commonly used data types do NOT include:",
  option: ["1 - Booleans", "2 - Alerts", "3 - Strings", "4 - Numbers"],
  correctAnswer: "2 - Alerts",
};

var questionChar2 = {
  question:
    "2. The condition of an if/else statement is enclosed within ______.",
  option: [
    "1 - Quotes",
    "2 - Curly Brackets",
    "3 - Parentheses",
    "4 - Square Brackets",
  ],
  correctAnswer: "3 - Parentheses",
};

var questionChar3 = {
  question: "3. Arrays in Javascript can be used to store ______.",
  option: [
    "1 - Numbers and strings",
    "2 - Other Arrays",
    "3 - Booleans",
    "4 - All of the above",
  ],
  correctAnswer: "4 - All of the above",
};

var questionChar4 = {
  question:
    "4. String values must be enclosed within ______ when being assigned to variables.",
  option: ["1 - Quotes", "2 - Curly Brackets", "3 - Commas", "4 - Parentheses"],
  correctAnswer: "1 - Quotes",
};

var questionChar5 = {
  question:
    "5. A very useful tool used during development and debugging for printing content to the debugger is:",
  option: [
    "1 - Javascript",
    "2 - console.log",
    "3 - Terminal/bash",
    "4 - For loops",
  ],
  correctAnswer: "2 - console.log",
};

var questionChar6 = {
  question:
    '6. What is the correct syntax for referring to an external script called "xxx.js "?',
  option: [
    '1 - <script="xxx.js.">',
    '2 - <script src="xxx.js">',
    '3 - <script name="xxx.js">',
    "4 - <script href=\"xxx.js'>",
  ],
  correctAnswer: '2 - <script src="xxx.js">',
};

var questionChar7 = {
  question:
    "7. Which built-in method removes the last element from an array and returns that element?",
  option: ["1 - last()", "2 - get()", "3 - pop()", "4 - None of the above"],
  correctAnswer: "3 - pop()",
};

var questionChar8 = {
  question: "8. Inside which HTML element do we put the JavaScript?",
  option: ["1 - <javascript>", "2 - <scripting>", "3 - <script>", "4 - <js>"],
  correctAnswer: "3 - <script>",
};

var questionChar9 = {
  question: "9. How to write an IF statement in Javascript?",
  option: [
    "1 - if i = 5 then",
    "2 - if i = 5",
    "3 - if i == 5 then",
    "4 - if (i==5)",
  ],
  correctAnswer: "4 - if (i==5)",
};

var questionChar10 = {
  question: '10. How do you write "Hello World" in an alert box?',
  option: [
    '1 - msg("Hello World");',
    '2 - alertBox("Hello World");',
    '3 - alert("Hello World");',
    '4 - msgBox("Hello World");',
  ],
  correctAnswer: '3 - alert("Hello World");',
};
// Put questions into an Array
var questionShowUp = [
  questionChar1,
  questionChar2,
  questionChar3,
  questionChar4,
  questionChar5,
  questionChar6,
  questionChar7,
  questionChar8,
  questionChar9,
  questionChar10,
];

// Functions =======================================
// After pressing Start button, quiz start. Start timer
function startQuiz() {
  var timeInterval = setInterval(function () {
    timeLeft--;
    timeEl.textContent = timeLeft + "s left";
    if (timeLeft < 0 || i === questionShowUp.length) {
      clearInterval(timeInterval);
      timeEl.textContent = "";
      InputYourName();
    }
  }, 1000);
  highScorePage.style.display = "none";
  startPage.style.display = "none";
  quizQuestionPage.style.display = "";
  quizQuestions();
}
// Check if questions run out
function quizQuestions() {
  if (i < questionShowUp.length) {
    loadQuestion();
    checkIfCorrect();
  } else {
    return;
  }
}
// Loading questions and options
function loadQuestion() {
  quizQuestionPage.children[0].textContent = questionShowUp[i].question;
  quizQuestionPage.children[1].children[0].textContent =
    questionShowUp[i].option[0];
  quizQuestionPage.children[2].children[0].textContent =
    questionShowUp[i].option[1];
  quizQuestionPage.children[3].children[0].textContent =
    questionShowUp[i].option[2];
  quizQuestionPage.children[4].children[0].textContent =
    questionShowUp[i].option[3];
}
// Check if answer is correct
function checkIfCorrect() {
  quizQuestionPage.addEventListener("click", function (event) {
    event.stopImmediatePropagation();
    if (
      event.target.matches("button") &&
      questionShowUp[i].correctAnswer === event.target.textContent
    ) {
      i++;
      quizQuestions();
      ansReveal.style.display = "";
      ansReveal.children[1].textContent = "Correct!";
      showAnswer();
    } else if (
      event.target.matches("button") &&
      questionShowUp[i].correctAnswer !== event.target.textContent
    ) {
      i++;
      timeLeft -= 10;
      quizQuestions();
      ansReveal.style.display = "";
      ansReveal.children[1].textContent = "Wrong!";
      showAnswer();
    }
  });
}
// Show if answer is correct
function showAnswer() {
  var answerInterval = setInterval(function () {
    clearInterval(answerInterval);
    ansReveal.children[1].textContent = "";
    ansReveal.style.display = "none";
  }, 1000);
}
// After running out questions or running out of time, input user score, put into localstorage
function InputYourName() {
  var storedValue = JSON.parse(localStorage.getItem("history"));
  if (storedValue !== null) {
    scoreHistoryArray = storedValue;
  }
  quizQuestionPage.style.display = "none";
  highScorePage.style.display = "none";
  enterInitials.style.display = "";
  enterInitials.children[1].textContent = "Your final score is " + timeLeft;
  submitBtn.addEventListener("click", function (event) {
    event.stopImmediatePropagation();
    var userInitial = document.querySelector("#input-initial").value.trim();
    if (userInitial === "") {
      return;
    }
    var unit = userInitial + "==" + timeLeft;
    scoreHistoryArray.push(unit);
    userInitial.value = "";
    localStorage.setItem("history", JSON.stringify(scoreHistoryArray));
    highScore();
  });
}
// Read score history from localstorage
function highScore() {
  startPage.style.display = "none";
  enterInitials.style.display = "none";
  highScorePage.style.display = "";

  for (var j = 0; j < scoreHistoryArray.length; j++) {
    var li = document.createElement("li");
    li.textContent = scoreHistoryArray[j];
    highScoreList.appendChild(li);
  }
}
// Reviewhistory whenever pressing the Viewhistory button
function reviewhistory() {
  quizQuestionPage.style.display = "none";
  startPage.style.display = "none";
  enterInitials.style.display = "none";
  highScorePage.style.display = "";
  highScoreList.innerHTML = "";
  var storedValue = JSON.parse(localStorage.getItem("history"));
  if (storedValue !== null) {
    scoreHistoryArray = storedValue;
  }
  for (var j = 0; j < scoreHistoryArray.length; j++) {
    var li = document.createElement("li");
    li.textContent = scoreHistoryArray[j];
    highScoreList.appendChild(li);
  }
}
// Clear localstorage
function clearLocalStorage() {
  localStorage.removeItem("history");
  highScoreList.innerHTML = "";
  scoreHistoryArray = [];
}
// Return to Startpage
function returnToStartPage() {
  timeLeft = 100;
  i = 0;
  highScoreList.innerHTML = "";
  startPage.style.display = "";
  highScorePage.style.display = "none";
}

// User Interaction =================================

startBtn.addEventListener("click", startQuiz);

highScoreBtn.addEventListener("click", reviewhistory);

clearHistory.addEventListener("click", clearLocalStorage);

returnHome.addEventListener("click", returnToStartPage);
