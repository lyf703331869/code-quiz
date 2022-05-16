// Dependencies =======================================
var main = document.querySelector("main");
var startPage = document.querySelector(".startPage");
var startBtn = document.querySelector(".start");
var quizQuestion = document.querySelector(".quizQuestion");
var timeEl = document.querySelector(".timer");
var ansReveal = document.querySelector(".answerReveal");
var enterInitials = document.querySelector(".enter-initials");
var submitBtn = document.querySelector("#submit-button");
var warning = document.querySelector("#warning");

// Starting Data ========================================
var timeLeft = 100;
var i = 0;

var questionChar1 = {
  question: "1. Commonly used data types do NOT include:",
  answers: ["1 - Booleans", "2 - Alerts", "3 - Strings", "4 - Numbers"],
  correctAnswer: "2 - Alerts",
};

var questionChar2 = {
  question:
    "2. The condition of an if/else statement is enclosed within ______.",
  answers: [
    "1 - Quotes",
    "2 - Curly Brackets",
    "3 - Parentheses",
    "4 - Square Brackets",
  ],
  correctAnswer: "3 - Parentheses",
};

var questionChar3 = {
  question: "3. Arrays in Javascript can be used to store ______.",
  answers: [
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
  answers: [
    "1 - Quotes",
    "2 - Curly Brackets",
    "3 - Commas",
    "4 - Parentheses",
  ],
  correctAnswer: "1 - Quotes",
};

var questionChar5 = {
  question:
    "5. A very useful tool used during development and debugging for printing content to the debugger is:",
  answers: [
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
  answers: [
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
  answers: ["1 - last()", "2 - get()", "3 - pop()", "4 - None of the above"],
  correctAnswer: "3 - pop()",
};

var questionChar8 = {
  question: "8. Inside which HTML element do we put the JavaScript?",
  answers: ["1 - <javascript>", "2 - <scripting>", "3 - <script>", "4 - <js>"],
  correctAnswer: "3 - <script>",
};

var questionChar9 = {
  question: "9. How to write an IF statement in Javascript?",
  answers: [
    "1 - if i = 5 then",
    "2 - if i = 5",
    "3 - if i == 5 then",
    "4 - if (i==5)",
  ],
  correctAnswer: "4 - if (i==5)",
};

var questionChar10 = {
  question: '10. How do you write "Hello World" in an alert box?',
  answers: [
    '1 - msg("Hello World");',
    '2 - alertBox("Hello World");',
    '3 - alert("Hello World");',
    '4 - msgBox("Hello World");',
  ],
  correctAnswer: '3 - alert("Hello World");',
};

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

startBtn.addEventListener("click", function startQuiz() {
  startPage.style.display = "none";
  quizQuestion.style.display = "";
  quizQuestions();
  var timeInterval = setInterval(function () {
    timeLeft--;
    timeEl.textContent = timeLeft + "s left";
    if (timeLeft <= -1 || i === 10) {
      clearInterval(timeInterval);
      timeEl.textContent = "";
      InputYourName();
    }
  }, 1000);
});

function quizQuestions() {
  if (i < 10) {
    loadQuestion();
    checkIfCorrect();
  } else {
    InputYourName();
  }
}

function loadQuestion() {
  quizQuestion.children[0].textContent = questionShowUp[i].question;
  quizQuestion.children[1].children[0].textContent =
    questionShowUp[i].answers[0];
  quizQuestion.children[2].children[0].textContent =
    questionShowUp[i].answers[1];
  quizQuestion.children[3].children[0].textContent =
    questionShowUp[i].answers[2];
  quizQuestion.children[4].children[0].textContent =
    questionShowUp[i].answers[3];
}

function checkIfCorrect() {
  quizQuestion.addEventListener("click", function (event) {
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
function showAnswer() {
  var answerInterval = setInterval(function () {
    clearInterval(answerInterval);
    ansReveal.children[1].textContent = "";
    ansReveal.style.display = "none";
  }, 1000);
}

function InputYourName() {
  quizQuestion.style.display = "none";
  enterInitials.style.display = "";
  enterInitials.children[1].textContent = "Your final score is " + timeLeft;
  submitBtn.addEventListener("click", function () {
    var userInitial = document.querySelector("#input-initial").value;
    // console.log(userInitial);
    if (userInitial === "") {
      warning.textContent = "Initial cannot be blank!";
    } else {
      localStorage.setItem("userInitial", userInitial);
      localStorage.setItem("score", timeLeft);
      highScore();
    }
  });
}

function highScore() {
  enterInitials.style.display = "none";
}

// User Interaction =================================

// Initicalization ==================================
