var main = document.querySelector("main");
var startPage = document.querySelector(".startPage");
var startBtn = document.querySelector(".start");
var quizQuestion = document.querySelector(".quizQuestion");
var timeEl = document.querySelector(".timer");
var ansReveal = document.querySelector(".answerReveal");
var enterInitials = document.querySelector(".enter-initials");
var timeLeft = 70;
var i = 0;

// console.log(questionShowUp[i].answers[0]);

var questionChar1 = {
  question: "Commonly used data types do NOT include:",
  answers: ["1 - Booleans", "2 - Alerts", "3 - Strings", "4 - Numbers"],
  correctAnswer: "2 - Alerts",
};

var questionChar2 = {
  question: "The condition of an if/else statement is enclosed within ______.",
  answers: [
    "1 - Quotes",
    "2 - Curly Brackets",
    "3 - Parentheses",
    "4 - Square Brackets",
  ],
  correctAnswer: "3 - Parentheses",
};

var questionChar3 = {
  question: "Arrays in Javascript can be used to store ______.",
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
    "String values must be enclosed within ______ when being assigned to variables.",
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
    "A very useful tool used during development and debugging for printing content to the debugger is:",
  answers: [
    "1 - Javascript",
    "2 - console.log",
    "3 - Terminal/bash",
    "4 - For loops",
  ],
  correctAnswer: "2 - console.log",
};

var questionShowUp = [
  questionChar1,
  questionChar2,
  questionChar3,
  questionChar4,
  questionChar5,
];

startBtn.addEventListener("click", function () {
  startPage.style.display = "none";
  quizQuestion.style.display = "";
  quizQuestions();
  var timeInterval = setInterval(function () {
    timeLeft--;
    timeEl.textContent = timeLeft + "s left";
    if (timeLeft <= -1) {
      clearInterval(timeInterval);
      timeEl.textContent = "";
      // InputYourName();
    }
  }, 1000);
});

function quizQuestions() {
  if (i <= 4) {
    loadQuestion();
    // console.log(questionShowUp[i]);
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
    var element = event.target;
    console.log(element);
    if (
      element.matches(".button") &&
      questionShowUp[i].correctAnswer === event.target.textContent
    ) {
      i++;
      quizQuestions();
      ansReveal.style.display = "";
      ansReveal.children[1].textContent = "Correct!";
      showAnswer();
    } else {
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
  var j = 2;
  var answerInterval = setInterval(function () {
    clearInterval(answerInterval);
    ansReveal.children[1].textContent = "";
    ansReveal.style.display = "none";
  }, 1000);
}

function InputYourName() {
  // event.preventDefault();
  clearInterval(timeInterval);
  quizQuestion.style.display = "none";
  enterInitials.style.display = "";
  enterInitials.children[1].textContent = "Your final score is " + timeLeft;
}
