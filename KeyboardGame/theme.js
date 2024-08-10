const button = document.querySelector('.fa-regular');
const body = document.querySelector('body');

button.addEventListener('click', () => {
    body.classList.toggle('light');
    button.classList.toggle('fa-sun');
    button.classList.toggle('fa-moon');
})