const burger__btn = document.querySelector('.burger');
console.log(burger__btn)
const burgerMenu = document.querySelector('.burger__menu');
console.log(burgerMenu)
const burgerBg = document.querySelector('.burger__bg')
const burgerCloseBtn = document.querySelector('.burger__close-btn')






burger__btn.addEventListener('click', function(){
    burgerMenu.classList.add('burger__active');
    burgerBg.classList.add('burger__active')

})
burgerCloseBtn.addEventListener('click', function(){
    burgerMenu.classList.remove('burger__active');
    burgerBg.classList.remove('burger__active')

})
burgerBg.addEventListener('click', function(){
    burgerMenu.classList.remove('burger__active');
    burgerBg.classList.remove('burger__active')

})















































