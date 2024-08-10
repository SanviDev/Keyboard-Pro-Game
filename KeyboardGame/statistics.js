import { countLetter, countWord } from './script.js';

function statistics() {
    const percentOk = document.getElementById('number-percent');
    const totalWord = document.getElementById('number-total');
    const letterOk = document.querySelectorAll('.correct').length

    const percent = (letterOk * 100) / countLetter;

    percentOk.innerText = percent;
    totalWord.innerText = countWord
}


export {statistics}