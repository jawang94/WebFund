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
const secondLargest = arr => {
    let max = 0;
    let secondLargest = 0;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] < max) {
            secondLargest = arr[i];
        }
    }
    return secondLargest;
}
let x = [1, 2, 3, 4, 5];
secondLargest(x);

//7 Double Trouble
const doubleTrouble = arr => {
    let arrDoubled = [];
    for(var i=0;i<arr.length;i++){
        arrDoubled.push(arr[i]);
        arrDoubled.push(arr[i]);
    }
    return arrDoubled;
}
let x = [1,2,3,4,5];
doubleTrouble(x);

//7 Double Trouble v2
function doubleValues(array) {
    return array.concat.apply([], array.map(function (el) { return [el, el] }));
 }
 let x = [1,2,3,4,5];
 console.log(doubleValues(x));
 