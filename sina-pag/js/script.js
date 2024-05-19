const sliders = [...document.querySelectorAll(".sliders .slider")];
const ratio = [...document.querySelectorAll(".ratio .box-ratio")];
const button = [...document.querySelectorAll(".ratio a")];

let numSlider = 0;

setInterval(() => {
    sliders[numSlider].classList.remove("active");
    ratio[numSlider].classList.remove("active-r")
    numSlider++
    numSlider===sliders.length&&(numSlider=0)
    sliders[numSlider].classList.add("active");
    ratio[numSlider].classList.add("active-r")
}, 5000);


const cards = [...document.querySelectorAll(".sliders-showcase")];
const nxtBtn = [...document.querySelectorAll(".card-shop-button-next")];
cards.forEach((indexCard, indexBtn) => {
  nxtBtn[indexBtn].addEventListener("click", () => {
    indexCard.scrollLeft += 465;
    if (indexCard.scrollLeft === 925) {
        indexCard.scrollLeft = 0
    }
  });
//   preBtn[indexBtn].addEventListener("click", () => {
//     indexCard.scrollLeft -= 800;
//   });
});


const playVideo = document.querySelector(".video-players i")
const play = document.querySelector(".video-players video")
playVideo.addEventListener("click" , () => {
  play.play()
  play.classList.add("paly")
  playVideo.classList.add("hiden-play-icon")
})

play.addEventListener("click"  , ()=>{
  play.pause();
  play.classList.remove("paly")
  playVideo.classList.remove("hiden-play-icon")
})


const brand = [...document.querySelectorAll(".brand")];
const nextBtn = [...document.querySelectorAll(".nextr")];
const backBtn = [...document.querySelectorAll(".backL")];
brand.forEach((indexCard, indexBtn) => {
  nextBtn[indexBtn].addEventListener("click", () => {
    indexCard.scrollLeft += 100;
  });
  backBtn [indexBtn].addEventListener("click", () => {
    indexCard.scrollLeft -= 100;
  });
});

const openMenu = document.querySelector(".bx-menu-alt-left")
const menuLeft =document.querySelector(".menu-left")
const closeMenu =document.querySelector('.bx-x')

openMenu.addEventListener("click",()=>{
  menuLeft.classList.add("show-menu-left")
})
closeMenu.addEventListener("click",()=>{
  menuLeft.classList.remove("show-menu-left")
})
