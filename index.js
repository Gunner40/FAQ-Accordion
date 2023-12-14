const questions = document.querySelectorAll(".question");
const displayMessageIcons = document.querySelectorAll(".displayAnswerIcon");

questions.forEach((question) => {
  question.addEventListener("click", () => {
    showAnswer(question);
  });
});

displayMessageIcons.forEach((question) => {
  question.addEventListener("click", () => {
    showAnswer(question);
  });
});

function showAnswer(question) {
  const plusIcon = "./assets/images/icon-plus.svg";
  const minusIcon = "./assets/images/icon-minus.svg";

  let image = "";
  let answer = question.parentElement.nextElementSibling;

  // if icon was clicked
  if (question.classList.contains("displayAnswerIcon")) {
    image = question.firstElementChild;
  } else {
    // if question was clicked
    image = question.nextElementSibling.firstElementChild;
  }

  // change icon source to minus and display answer
  if (image.getAttribute("src") === plusIcon) {
    image.setAttribute("src", minusIcon);
    answer.classList.toggle("d-none");
    // change icon source back to plus, and hide answer
  } else {
    image.setAttribute("src", plusIcon);
    answer.classList.toggle("d-none");
  }
}
