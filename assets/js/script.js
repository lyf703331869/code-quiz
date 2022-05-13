var main = document.querySelector("main");
var startPage = document.querySelector(".startPage");
var startBtn = document.querySelector(".start");
var timeEl = document.querySelector(".timer");
var timeLeft = 3;
// console.log(main);
startBtn.addEventListener("click", function () {
  main.removeChild(startBtn);
  main.removeChild(startPage);
  var timeInterval = setInterval(function () {
    timeLeft--;
    timeEl.textContent = timeLeft + "s left";
    if (timeLeft <= -1) {
      clearInterval(timeInterval);
      timeEl.textContent = "";
      //   InputYourName();
    }
  }, 1000);
  main.children[0].style.display = "";
});

// function InputYourName(event){
//     event.preventDefault();
//     var userName =
// }
