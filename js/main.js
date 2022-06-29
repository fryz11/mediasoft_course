
//burger==========================================
const fill = document.querySelector('.burger__fill')
const burger = document.querySelector('.header__burger')
const closeBurger = document.querySelector('.burger__closebtn')
const body = document.body

burger.addEventListener('click', burgerFill)
closeBurger.addEventListener('click', burgerFill)
function burgerFill(e) {
    e.preventDefault();
    fill.classList.toggle("burger__fill--open");
    body.classList.toggle("noscroll")
}

//header-fix======================================
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    const header = document.querySelector('.header');
    const startPage = document.querySelector('.intro');
    const headerHeight = 100;

    if (document.body.scrollTop > headerHeight || document.documentElement.scrollTop > headerHeight) {
        header.classList.add('header__fixed');
        startPage.style.marginTop = `${headerHeight}px`;
    } else {
        header.classList.remove('header__fixed')
        startPage.style.marginTop = null;
    }
}
