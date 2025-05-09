let smartphones = document.querySelectorAll('.smartphones');
let laptops = document.querySelectorAll('.laptops');
let headphones = document.querySelectorAll('.headphones');

let sliderCounter = 0;
let sliderImages = ['img/discount_galaxy_s21.jpg', 'img/discount_iphone_16.jpg', 'img/discount_jbl.jpg'];
let sliderImgElement = document.querySelector('.discount-img');


smartphones.forEach(item => item.addEventListener('click', () => localStorage.setItem('category', 'smartphones')));

laptops.forEach(item => item.addEventListener('click', () => localStorage.setItem('category', 'laptops')));

headphones.forEach(item => item.addEventListener('click', () => localStorage.setItem('category', 'headphones')));


document.querySelector('.slider-btn-left').addEventListener('click', () => {
    sliderCounter === 0 ? sliderCounter = 2 : sliderCounter = sliderCounter - 1;
    sliderImgElement.src = sliderImages[sliderCounter];
});

document.querySelector('.slider-btn-right').addEventListener('click', () => {

    sliderCounter === sliderImages.length - 1 ? sliderCounter = 0 : sliderCounter = sliderCounter + 1;
    sliderImgElement.src = sliderImages[sliderCounter];
});














