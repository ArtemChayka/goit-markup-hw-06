
const modal = document.querySelector('.backdrop')
function f1() {
    modal.classList.add('is-open')
} 
function f2() {
    modal.classList.toggle('is-open')
}
document.querySelector('.hero-btn').addEventListener('click', f1);
document.querySelector('.close-btn').addEventListener('click', f2);