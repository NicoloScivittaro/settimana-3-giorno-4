const numbersDiv = document.getElementById('numbers');
const usedNumbers = [];

for (let i = 0; i < 90; i++) {
    const numberDiv = document.createElement('div');
    numberDiv.classList.add('num');
    numberDiv.innerText = i + 1;
    numbersDiv.appendChild(numberDiv);
}

function getRandomNumberExcluding(min, max, exclude) {
    let randomNumber;

    do {
        randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    } while (exclude.includes(randomNumber));
    
    exclude.push(randomNumber);
    return randomNumber;
}

function collegaClasse() {
    const randomNumber = getRandomNumberExcluding(1, 90, usedNumbers);

    const numberDivs = document.querySelectorAll('.num');
    numberDivs.forEach((div, index) => {
        if (index + 1 === randomNumber) {
            div.classList.add('illuminati');
        } 
    });
}

document.getElementById('generateButton').addEventListener('click', collegaClasse);
console.log(usedNumbers);