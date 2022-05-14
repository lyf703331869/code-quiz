var main = document.querySelector("main");
var startPage = document.querySelector(".startPage");
var startBtn = document.querySelector(".start");
var quizQuestion = document.querySelector(".quizQuestion");
var timeEl = document.querySelector(".timer");
var timeLeft = 100;
var i = 0;

var questionChar = {
  question: "What is one plus one?",
  answers: ["two", "three", "four", "five"],
  correctAnswer: "two",
};

startBtn.addEventListener("click", function () {
  var timeInterval = setInterval(function () {
    timeLeft--;
    timeEl.textContent = timeLeft + "s left";
    if (timeLeft <= -1) {
      clearInterval(timeInterval);
      timeEl.textContent = "";
      //   InputYourName();
    }
  }, 1000);
  startPage.style.display = "none";
  quizQuestion.style.display = "";
  quizQuestions();
});

function quizQuestions() {
  i++;
  if (i <= 10) {
    quizQuestion.children[0].textContent = questionChar.question;
    quizQuestion.children[1].children[0].textContent = questionChar.answers[0];
    quizQuestion.children[2].children[0].textContent = questionChar.answers[1];
    quizQuestion.children[3].children[0].textContent = questionChar.answers[2];
    quizQuestion.children[4].children[0].textContent = questionChar.answers[3];

    checkIfCorrect();
  } else {
    //   InputYourName();
  }
  i++;
}

function checkIfCorrect() {
  var answerChosen = document.querySelector(".quizQuestion");
  answerChosen.addEventListener("click", function (event) {
    var element = event.target;

    if (
      element.matches("button") &&
      questionChar.correctAnswer === event.target.textContent
    ) {
      quizQuestions();
    } else {
      quizQuestions();
      timeLeft -= 10;
    }
  });
}
// function InputYourName(event){
//     event.preventDefault();
//     var userName =
//
