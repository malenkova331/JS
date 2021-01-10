// task-6
let factorial = (n) => {
    fact = 1
    for (let i = 1; i <= n; i++){
        fact = fact * i
    }
    return fact
}
alert(factorial(3))