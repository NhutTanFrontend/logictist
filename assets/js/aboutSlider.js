const aboutSlider = document.getElementById("about-slider");
const aboutSliderE = document.querySelectorAll("#about-slider .flex-shrink-0");
const aboutSliderBtnW = document.getElementById("about-slider-btn");

let numberTrans = 0
let numberElement = 0
let screenW = window.innerWidth;
if (screenW < 480) {
  numberTrans = aboutSliderE[0].offsetWidth;
  numberElement = aboutSliderE.length
} else if (screenW >= 480 && screenW < 768) {
  numberTrans = aboutSliderE[0].offsetWidth + 20;
  numberElement = aboutSliderE.length - 1
} else if (screenW >= 768) {
  numberTrans = aboutSliderE[0].offsetWidth + 40;
  numberElement = aboutSliderE.length - 2
}

let indexBtn = 0;
aboutSliderE.forEach((e, index) => {
  if (index < numberElement) {
    const button = document.createElement("p");
    button.classList.add(
      "w-3",
      "h-3",
      "border-gray-400",
      "border",
      "rounded-full",
      "cursor-pointer"
    );
    button.dataset.index = index;

    aboutSliderBtnW.appendChild(button);
  }
});

const aboutSliderBtn = document.querySelectorAll("#about-slider-btn p");

aboutSliderBtn.forEach((e, index) => {
  aboutSliderBtn[indexBtn].classList.add("border-main-blue");

  e.addEventListener("click", () => {
    aboutSlider.style.transform = `translateX(${index * -numberTrans}px)`;
    aboutSliderBtn[index].classList.remove("border-gray-400");
    aboutSliderBtn[index].classList.add("border-main-blue");
    aboutSliderBtn[indexBtn].classList.add("border-gray-400");
    aboutSliderBtn[indexBtn].classList.remove("border-main-blue");
    indexBtn = index;
  });
});
