const questionEl = document.querySelectorAll(".faq__question__title");
const arrowEl = document.querySelectorAll(".faq__question__arrow");
const answerEl = document.querySelectorAll(".faq__question__answer");

questionEl.forEach((question) => {
  question.addEventListener("click", () => {
    answerEl.forEach((answer) => {
      if (question.id === answer.id) {
        answer.classList.toggle("active");
        question.classList.toggle("make-text-bold");

        arrowEl.forEach((arrow) => {
          if (arrow.id === answer.id) {
            arrow.classList.toggle("make-arrow-up");
          }
        });
      }
    });
  });
});

arrowEl.forEach((arrow) => {
  arrow.addEventListener("click", () => {
    answerEl.forEach((answer) => {
      if (arrow.id === answer.id) {
        answer.classList.toggle("active");
        arrow.classList.toggle("make-arrow-up");

        questionEl.forEach((question) => {
          if (question.id === answer.id) {
            question.classList.toggle("make-text-bold");
          }
        });
      }
    });
  });
});
