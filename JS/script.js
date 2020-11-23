

// 1

let smallestDivisor = function(x) {
    let divisor = 0;
    let a = 2;
    let smallest = x;
    while (a <= x/2){
        if (x % a == 0){
            divisor = a;
            if (divisor < smallest){
                smallest = divisor
            }
        }
        a += 1;
    };
    if (smallest > 0){
        return smallest;
    } else {
        return NaN
    }
}; 
console.log(smallestDivisor(-1));


// 2 

let isPrime = function(x){
    if (x == 1){
        return false
    };

    let divisor = x;
    let a = 2;
    while (a <= x/2){
        if (x % a == 0){
            divisor = a;
        }
        a += 1;
    };
    if (divisor != x){
        return false;
    } else if(divisor != 1 & divisor == x){
        return true;
    };
};

console.log(isPrime(23))