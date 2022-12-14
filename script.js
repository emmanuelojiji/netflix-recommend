import { productions } from "./array.js";

window.onload = () => {
  const option = document.querySelectorAll(".option");
  const optionList = Array.from(option);
  const carousel = document.querySelector(".carousel-container");
  const resultView = document.querySelector(".result-view");
  const header = document.querySelector('header')

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

      if (optionList[i].classList.contains("final")) {
        setTimeout(() => {
          window.confetti({
            spread: 100,
            particleCount: 150,
            origin: { y: 0.85 },
          });
        }, 200);

        main.style.background =
          "linear-gradient(rgba(0,0,0,0.6),rgba(0,0,0,0.6)), url(./stranger-things.jpeg)";

          header.style.background = "transparent"
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
    boxContainer.style.opacity = "1";
  }, 300);

  setTimeout(() => {
    box1.style.transform = "rotateY(5deg)";
    box3.style.transform = "rotateY(-5deg)";
  }, 100);

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

  const main = document.querySelector("main");

  box1.onmouseover = () => {
    main.style.background =
      "linear-gradient(rgba(0,0,0,0.6),rgba(0,0,0,0.6)), url(./got.webp)";

    box1.onmouseout = () => {
      main.style.background = "#221f1f";
    };
  };

  box2.onmouseover = () => {
    main.style.background =
      "linear-gradient(rgba(0,0,0,0.6),rgba(0,0,0,0.6)), url(./stranger-things.jpeg)";

    box2.onmouseout = () => {
      main.style.background = "#221f1f";
    };
  };

  box3.onmouseover = () => {
    main.style.background =
      "linear-gradient(rgba(0,0,0,0.6),rgba(0,0,0,0.6)), url(./big-mouth.jpeg)";

    box3.onmouseout = () => {
      main.style.background = "#221f1f";
    };
  };
};
