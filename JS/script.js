let page = document.querySelector('.page')
let proButton = document.querySelector('.proButton')
// дабавляются 2 переменные для быстрого доступа к используемым ниже классам

proButton.onclick = function(){
    page.classList.remove('classic')
    page.classList.add('pro-version')
    console.log('Кнопка нажата!')
}

let message = document.querySelector('.message').textContent
console.log(message)

