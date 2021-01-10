// task-6 1
let factorial = (n) => {
    fact = 1
    for (let i = 1; i <= n; i++){
        fact = fact * i
    }
    return fact
}
console.log(factorial(3))

//2

let sumSquareDifference = (n) => {
    fact = 0
    for (let i = 1; i <= n; i++){
        fact += i**2 
    }
    k = 0
    for (let i = 1; i <= n; i++){
        k += i
    }
    return (k**2 - fact)
}
console.log(sumSquareDifference(10))