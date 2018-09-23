//1
const positiveToBig = arr => {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            arr[i] = 'big';
        }
    }
    return arr;
}
let x = [-1, -2, 1, 2, 3, 4, 5];
positiveToBig(x);

//2
const printLowReturnHigh = arr => {
    let low = arr[0];
    let high = arr[0];
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] < low) {
            low = arr[i];
        } else if (arr[i] > high) {
            high = arr[i];
        }
    }
    console.log(low);
    return high;
}
let x = [1, 2, 3, 4, 5, 6, 7, 8, 9];
printLowReturnHigh(x);

//3
const printOneReturnAnother = arr => {
    console.log(arr[arr.length - 2]);
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] % 0 !== 0) {
            return arr[i];
        }
    }
}
let x = [1, 2, 3, 4, 5, 6, 7, 8, 9];
printOneReturnAnother(x);

//4
const doubleVision = arr => {
    let doublearr = [];
    for (var i = 0; i < arr.length; i++) {
        doublearr.push(arr[i] * 2);
    }
    return doublearr;
}
let x = [1, 2, 3, 4, 5];
doubleVision(x);

//5
const countPositives = arr => {
    let count = 0;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            count += 1;
        }
    }
    arr[arr.length - 1] = count;
    return arr;
}
let x = [-1, -1, -1, 1, 1, 1];
countPositives(x);

//6
const evensAndOdds = arr => {
    let oddcount = 0;
    let evencount = 0;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] % 2 !== 0) {
            oddcount += 1;
            if (oddcount === 3) {
                console.log("That's odd!");
                oddcount = 0;
            }
        }
        else if (arr[i] % 2 === 0) {
            evencount += 1;
            if (evencount === 3) {
                console.log("Even more so!");
                evencount = 0;
            }
        }
    }
}
let x = [1, 1, 1, 2, 3, 4, 4, 4, 5, 6, 6, 6];
evensAndOdds(x);

//7
const incrementTheSeconds = arr => {
    for(var i=0;i<arr.length;i++){
        if(i%2!==0){
            arr[i] = arr[i]+1;
        }
        console.log(arr[i]);
    }
    return arr;
}
let x = [1,2,3,4,5];
incrementTheSeconds(x);

//8
