const slideContainer = document.querySelectorAll('.slide-container');
const arrowContainer = document.querySelectorAll('.slide-arrows');
const arrows = ['previous', 'next'];
const slideItems = document.querySelectorAll('.slide-item');

class Carousel{
    constructor(container, items, controls){
        this.carContainer = container;
        this.carControls = controls;
        this.carArray = [...items];
    }
    updateSlides(){
        this.carArray.forEach(el =>{
            el.classList.remove('slide1');
            el.classList.remove('slide2');
            el.classList.remove('slide3');
            el.classList.remove('slide4');
            el.classList.remove('slide5');
        });
    
        this.carArray.slice(0,5).forEach(el , i=>{
            el.classList.add(`slide${i+1}`);
        });
    }
    setCurrentState(direction){
        if (direction.className == 'slide-arrows-previous'){
            this.carArray.unshift(this.carArray.pop());
        }
        else{
            this.carArray.push(this.carArray.shift());
            this.updateSlides();
        }
    }
    
    setControls(){
        this.carControls.forEach(control=>{
            arrowContainer.appendChild(document.createElement('button')).classname = `slide${control}`;
            document.querySelector(`.slide${control}`).innerText = control;
        });
    }
    
    useControls(){
        const triggers = [...arrowContainer.childNodes];
        triggers.forEach(control=>{
            control.addEventListener('click', e =>{
                e.preventDefault();
                this.setCurrentState(control);
            });
        });
    }
}

const rapCar = new Carousel(slideContainer, slideItems, arrows);
rapCar.setControls();
rapCar.useControls();