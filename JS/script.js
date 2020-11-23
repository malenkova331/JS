// let year = prompt('В каком году была опубликована спецификация ECMAScript-2015?', '');

// let result = (year < 2015) ? 'Это слишком рано...':
//     (year > 2015) ? 'Это поздновато' :
//     'Верно!';

// alert(result)

let name = document.querySelector('.name');
let age = document.querySelector('.age');

let buttonConfirm = document.getElementById('confirm')

buttonConfirm.onclick = function() {
    alert('Привет, ' + name.value);
// ниже в константу вводится возраст, введеный пользователем
    const userAge = age.value;
    console.log(userAge)
}

// циклы и функции

// 4

let range = function(n, m){
    let list = Array();
    for (i = n; i != m+1; i++){
        list.push(i);
    };

    return(list);
};
console.log(range(15,30))

// 5

let rangeOdd = function(n, m){
    let list = Array();
    for (i = n; i != m+1; i++){
        if (i % 2 != 0) {
            list.push(i); 
        };
    };
    return(list); 
};
console.log(rangeOdd(15,30))

//6

let average = function(a,b) {
    return((a+b)/2);
};
console.log(average(4,5));
// среднее арифметическое 

let square = function(n) {
    return(n**2);
};
console.log(square(5))
// квадрат

let cube = function(n) {
    return(n**3);
};
console.log(cube(5));
//куб

let calculate = function(a,b){
    return(a+b);
};

// не очень поняла строчку "Результаты сложите в массив и возвратите из функции calculate."
let newList = Array();
for(i = 0; i!= 10; i++) {
    let a = average(square(i),cube(i));
    newList.push(a);
};
let summ = 0;
for(i = 0; i != newList.length-1; i++) {
    summ += calculate(newList[i], newList[i+1])
};
console.log(summ)