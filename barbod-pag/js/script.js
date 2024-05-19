"use strict";
// give all variables
// slider variables
const bannerSlider = document.querySelectorAll(".banner-slider");
const textBox = document.querySelectorAll(".text-box");
const chevLeft = document.querySelector("#chev-left");
const chevRight = document.querySelector("#chev-right");
const circleIcon = document.querySelectorAll(".circle");
// video collection variables
const manVideo = document.querySelector("#man-video");
const manPlay = document.querySelector("#man-play");
const manPause = document.querySelector("#man-pause");
const womanVideo = document.querySelector("#woman-video");
const womanPlay = document.querySelector("#woman-play");
const womanPause = document.querySelector("#woman-pause");
// slider collection variables for man and woman
const manSliderSection=document.querySelector('#man-slider')
const chevSliderRight=document.querySelector('#chev-slider-right')
const womanSliderSection=document.querySelector('#woman-slider')
const chevSliderLeft=document.querySelector('#chev-slider-left')
// hamburger menu variables
const menu =document.querySelector('#menu')
const openEl=document.querySelector('#hamburger-menu')
const closeEl=document.querySelector('#close')
// slider functions
let activeIndexSlider = 0; //index for slider
chevRight.addEventListener("click", () => {
  bannerSlider[activeIndexSlider].classList.remove("active-banner");
  textBox[activeIndexSlider].classList.remove("show-text-box");
  circleIcon[activeIndexSlider].classList.remove("bx-radio-circle-marked");
  activeIndexSlider++;
  activeIndexSlider === bannerSlider.length && (activeIndexSlider = 0);
  bannerSlider[activeIndexSlider].classList.add("active-banner");
  textBox[activeIndexSlider].classList.add("show-text-box");
  circleIcon[activeIndexSlider].classList.add("bx-radio-circle-marked");
});
chevLeft.addEventListener("click", () => {
  bannerSlider[activeIndexSlider].classList.remove("active-banner");
  textBox[activeIndexSlider].classList.remove("show-text-box");
  circleIcon[activeIndexSlider].classList.remove("bx-radio-circle-marked");
  activeIndexSlider--;
  activeIndexSlider < 0 && (activeIndexSlider = bannerSlider.length - 1);
  bannerSlider[activeIndexSlider].classList.add("active-banner");
  textBox[activeIndexSlider].classList.add("show-text-box");
  circleIcon[activeIndexSlider].classList.add("bx-radio-circle-marked");
});
// make slider auto
setInterval(() => {
  bannerSlider[activeIndexSlider].classList.remove("active-banner");
  textBox[activeIndexSlider].classList.remove("show-text-box");
  circleIcon[activeIndexSlider].classList.remove("bx-radio-circle-marked");
  activeIndexSlider++;
  activeIndexSlider === bannerSlider.length && (activeIndexSlider = 0);
  bannerSlider[activeIndexSlider].classList.add("active-banner");
  textBox[activeIndexSlider].classList.add("show-text-box");
  circleIcon[activeIndexSlider].classList.add("bx-radio-circle-marked");
}, 4000);

// play video in collection
manPause.style.display = "none";
manPlay.addEventListener("click", () => {
  manPlay.style.display = "none";
  manPause.style.display = "inline-block";
  manPause.style.opacity = 0.2;
  manVideo.play();
  manVideo.classList.add("play-video");
});
manPause.addEventListener("click", () => {
  manPlay.style.display = "inline-block";
  manPause.style.display = "none";
  manVideo.pause();
  manVideo.classList.remove("play-video");
});
womanPause.style.display = "none";
womanPlay.addEventListener("click", () => {
  womanPlay.style.display = "none";
  womanPause.style.display = "inline-block";
  womanPause.style.opacity = 0.2;
  womanVideo.play();
  womanVideo.classList.add("play-video");
});
womanPause.addEventListener("click", () => {
  womanPlay.style.display = "inline-block";
  womanPause.style.display = "none";
  womanVideo.pause();
  womanVideo.classList.remove("play-video");
});
// slider collection fro man and woman
let maxScroll=manSliderSection.scrollWidth-manSliderSection.clientWidth
chevSliderRight.addEventListener('click',()=>{
  manSliderSection.scrollLeft>(maxScroll-1)?(manSliderSection.scrollLeft-=maxScroll):manSliderSection.scrollLeft+=300
})
let maxScrollWoman=womanSliderSection.scrollWidth-womanSliderSection.clientWidth
chevSliderLeft.addEventListener('click',()=>{
  womanSliderSection.scrollLeft<(maxScrollWoman-1)?(womanSliderSection.scrollLeft+=maxScrollWoman):womanSliderSection.scrollLeft-=300
})
// hamburger menu
openEl.addEventListener('click',()=>{menu.classList.add('show-menu')})
closeEl.addEventListener('click',()=>{menu.classList.remove('show-menu')})