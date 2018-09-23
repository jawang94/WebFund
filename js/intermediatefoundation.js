//1 Sigma
const sigma = num => {
    let sum = 0;
    for (var i = num; i > 0; i--) {
        sum += i;
    }
    return sum;
}
sigma(15);

//2 Factorial
const factorial = num => {
    let product = 1;
    for (var i = 1; i <= num; i++) {
        product *= i;
    }
    return product;
}
factorial(num);

//3 Fobinacci
const fibonacci = idx => {
    let fibosum = 0;
    if (idx > 1) {
        fibosum = ((idx - 1) + (idx - 2));
    } else if (idx === 0 || idx === 1) {
        fibosum = idx;
    }
    return fibosum;
}
fibonacci(5);

//4 Array: Second-to-Last
const secondToLast = arr => {
    for (var i = 0; i < arr.length; i++) {
        if (arr.length > 0) {
            return arr[arr.length - 2];
        }
        else {
            return null;
        }
    }
}
let x = [42, true, 4, "Liam", 7]
secondToLast(x);

//5 Array: Nth-to-Last
const secondToLast = (arr, n) => {
    for (var i = 0; i < arr.length; i++) {
        if (arr.length - n >= 0) {
            return arr[arr.length - n];
        }
        else {
            return null;
        }
    }
}
let x = [5]
secondToLast(x, 3);

//6 Array: Second-Largest
