
const modal = document.querySelector('.backdrop')
const mobile = document.querySelector('.mobile-menu')

function f1() {
    modal.classList.add('is-open')
} 
function f2() {
    modal.classList.toggle('is-open')
}
function f3 () {
    mobile.classList.add("on-open")
}
function f4 () {
    mobile.classList.toggle("on-open")
}


document.querySelector('.hero-btn').addEventListener('click', f1);
document.querySelector('.close-btn').addEventListener('click', f2);
document.querySelector('.burger-btn').addEventListener('click', f3);
document.querySelector('.mobile-menu-close-btn').addEventListener('click', f4);
