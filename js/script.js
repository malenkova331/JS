// let page = document.querySelector('.page')
// let proButton = document.querySelector('.proButton')
// // дабавляются 2 переменные для быстрого доступа к используемым ниже классам

// proButton.onclick = function(){
//     page.classList.remove('classic')
//     page.classList.add('pro-version')
//     console.log('Кнопка нажата!')
// }

// let message = document.querySelector('.message').textContent
// console.log(message)

// if (year < 2015) {
//   alert( 'Это слишком рано...' );
// } else if (year > 2015) {
//   alert( 'Это поздновато' );
// } else {
//   alert( 'Верно!' );
// }

let year = prompt('В каком году была опубликована спецификация ECMAScript-2015?', '');

let result = (year < 2015) ? 'Это слишком рано...':
    (year > 2015) ? 'Это поздновато' :
    'Верно!';

alert(result)