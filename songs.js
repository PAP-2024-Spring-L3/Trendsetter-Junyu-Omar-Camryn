
//slide show
let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

//automatic slide show
function showSlides() {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    slideIndex++;
    
 if (slideIndex > slides.length) {slideIndex = 1}
    slides[slideIndex-1].style.display = "block";
    setTimeout(showSlides, 5000); // Change image every 5 seconds
  }
  //Slide show ends

  // netflix slider

const sliders = document.querySelector(".netflixcarouselbox");
var scrollPerClick;
var ImagePadding = 20;

showGameData();

  var scrollAmount =0;

  function sliderScrollLeft(){
    sliders.scrollTo({
      top:0,
      left:(scrollAmount -= scrollPerClick),
      behavior:"smooth",
    });
    if(scrollAmount<0){
      scrollAmount= 0
    }
  }
  function sliderScrollRight(){
     
      if(scrollAmount <= sliders.scrollWidth-sliders.clientWidth){
        sliders.scrollTo({
          top:0,
          left:(scrollAmount+=scrollPerClick),
          behavior:"smooth"
        });
      }
  }













// const slideContainer = document.querySelectorAll('.slide-container');
// const arrowContainer = document.querySelectorAll('.slide-arrows');
// const arrows = ['previous', 'next'];
// const slideItems = document.querySelectorAll('.slide-item');

// class Carousel{
//     constructor(container, items, controls){
//         this.carContainer = container;
//         this.carControls = controls;
//         this.carArray = [...items];
//     }
//     updateSlides(){
//         this.carArray.forEach(el =>{
//             el.classList.remove('slide1');
//             el.classList.remove('slide2');
//             el.classList.remove('slide3');
//             el.classList.remove('slide4');
//             el.classList.remove('slide5');
//         });
    
//         this.carArray.slice(0,5).forEach(el , i=>{
//             el.classList.add(`slide${i+1}`);
//         });
//     }
//     setCurrentState(direction){
//         if (direction.className == 'slide-arrows-previous'){
//             this.carArray.unshift(this.carArray.pop());
//         }
//         else{
//             this.carArray.push(this.carArray.shift());
//             this.updateSlides();
//         }
//     }
    
//     setControls(){
//         this.carControls.forEach(control=>{
//             arrowContainer.appendChild(document.createElement('button')).classname = `slide${control}`;
//             document.querySelector(`.slide${control}`).innerText = control;
//         });
//     }
    
//     useControls(){
//         const triggers = [...arrowContainer.childNodes];
//         triggers.forEach(control=>{
//             control.addEventListener('click', e =>{
//                 e.preventDefault();
//                 this.setCurrentState(control);
//             });
//         });
//     }
// }

// const rapCar = new Carousel(slideContainer, slideItems, arrows);
// rapCar.setControls();
// rapCar.useControls();