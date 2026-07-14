// IMAGE SLIDER

const images = [

"kitchen 2 (2).jpg",
"img 2.jpg",
"img 3.jpg",
"LD 10.jpg"
];

let current = 0;

const sliderImage =
document.getElementById("slider-image");

setInterval(() => {

sliderImage.style.opacity = "0";

setTimeout(() => {

current++;

if(current >= images.length){

current = 0;

}

sliderImage.src = images[current];

sliderImage.style.opacity = "1";

sliderImage.style.transform =
"scale(1.05)";

},600);

},5000);


// ACCORDION

const items =
document.querySelectorAll('.accordion-item');

items.forEach(item=>{

const btn =
item.querySelector('.accordion-btn');

btn.addEventListener('click',()=>{

items.forEach(i=>{

if(i!==item){

i.classList.remove('active');

}

});

item.classList.toggle('active');

});

});


