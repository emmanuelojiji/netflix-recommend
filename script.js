import { productions } from "./array.js";

window.onload = () => {
  const option = document.querySelectorAll(".option");
  const optionList = Array.from(option);
  const carousel = document.querySelector(".carousel-container");

  let initial = 0;
  let resultArray = [];

  for (let i = 0; i < optionList.length; i++) {
    optionList[i].onclick = () => {
      initial += 100;
      console.log(initial);

      setTimeout(() => {
        carousel.style.transform = `translateY(-${initial}%)`;
      }, 50);

      if (optionList[i].classList.contains("movie")) {
        const tv_question = document.querySelector(".tv-question");
        tv_question.style.display = "none";
      }

      if (optionList[i].classList.contains("tv")) {
        const movie_question = document.querySelector(".movie-question");
        movie_question.style.display = "none";
      }

      if (optionList[i].classList.contains("genre")) {
        let selected = optionList[i].value;
        resultArray = productions.filter(
          (production) => production.genre == selected
        );

        console.log(resultArray);
      }

      if (optionList[i].classList.contains("type")) {
        let selected = optionList[i].value;
        resultArray = resultArray.filter(
          (production) => production.type == selected
        );
        console.log(resultArray);
      }
    };
  }

  const boxContainer = document.querySelector(".box-container");
  const box1 = document.querySelector(".box1");
  const box2 = document.querySelector(".box2");
  const box3 = document.querySelector(".box3");

  setTimeout(() => {
    box1.style.transform = "translateX(0%)";
    box3.style.transform = "translateX(0%)";
  }, 100);

  setTimeout(() => {
    box1.style.transform = "rotateY(5deg)";
    box3.style.transform = "rotateY(-5deg)";
  }, 150);

  /*setTimeout(() => {
    boxContainer.style.gap = "8px";
  }, 600);

  setTimeout(() => {
    box2.style.transform = "translateY(-120%)";
  }, 1500);

  setTimeout(() => {
    box3.style.transform = "translateX(-100%)"
  },2500);

  setTimeout(() => {
    box2.style.transform = "translateX(120%)";
  }, 3500);*/
};
