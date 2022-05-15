var main = document.querySelector("main");
var startPage = document.querySelector(".startPage");
var startBtn = document.querySelector(".start");
var quizQuestion = document.querySelector(".quizQuestion");
var timeEl = document.querySelector(".timer");
var timeLeft = 100;
var i = 0;

var questionChar1 = {
  question: "What is one plus one?",
  answers: ["two", "three", "four", "five"],
  correctAnswer: "two",
};

var questionChar2 = {
  question: "What is one minus one?",
  answers: ["zero", "one", "two", "three"],
  correctAnswer: "zero",
};

var questionShowUp = [questionChar1, questionChar2];

console.log(questionShowUp);

startBtn.addEventListener("click", function () {
  var timeInterval = setInterval(function () {
    timeLeft--;
    timeEl.textContent = timeLeft + "s left";
    if (timeLeft <= -1) {
      clearInterval(timeInterval);
      timeEl.textContent = "";
      // InputYourName();
    }
  }, 1000);
  startPage.style.display = "none";
  quizQuestion.style.display = "";
  quizQuestions();
});

function quizQuestions() {
  if (i <= 10) {
    loadQuestion();
    checkIfCorrect();
  } else {
    //   InputYourName();
  }
}

function loadQuestion() {
  // need to find out how to change questions 5/14
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
  var answerChosen = document.querySelector(".quizQuestion");
  answerChosen.addEventListener("click", function (event) {
    var element = event.target;

    if (
      element.matches("button") &&
      questionShowUp[i].correctAnswer === event.target.textContent
    ) {
      i++;
      quizQuestions();
    } else {
      i++;
      quizQuestions();
      timeLeft -= 10;
    }
  });
}
// function InputYourName(event){
//     event.preventDefault();
//     var userName =
//
