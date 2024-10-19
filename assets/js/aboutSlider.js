const aboutSlider = document.getElementById("about-slider");
const aboutSliderE = document.querySelectorAll("#about-slider .flex-shrink-0");
const aboutSliderBtnW = document.getElementById('about-slider-btn')

let indexBtn = 0;
let screenW = window.innerWidth;
aboutSliderE.forEach((e, index) => {
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

  aboutSliderBtnW.appendChild(button)
});

const aboutSliderBtn = document.querySelectorAll("#about-slider-btn p");

let numberTrans = 0
if(screenW < 480){
    numberTrans = 100
} else if(screenW >= 480 && screenW < 768){
    numberTrans = 50
} else if(screenW >= 768 && screenW < 1024){
    numberTrans = 33,3333
} else {
    numberTrans = 33,3333
}
aboutSliderBtn.forEach((e, index) => {
  aboutSliderBtn[indexBtn].classList.add("border-main-blue");

  e.addEventListener("click", () => {
    aboutSlider.style.transform = `translateX(${index * -numberTrans}%)`;
    aboutSliderBtn[index].classList.remove("border-gray-400");
    aboutSliderBtn[index].classList.add("border-main-blue");
    aboutSliderBtn[indexBtn].classList.add("border-gray-400");
    aboutSliderBtn[indexBtn].classList.remove("border-main-blue");
    indexBtn = index;
  });
});
