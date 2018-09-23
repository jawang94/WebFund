//1
const oneto255 = () => {
    let arr = [];
    for(var i=0; i<256; i++){
        arr.push(i);
    }
    return arr;
}

//2
const sumEvenThousand = () => {
    let sum = 0;
    for(var i=0;i<1001;i++){
        if(i%2===0){
            sum+=i;
        }
    }
    return sum;
}
sum1000();

//3
const sumOddFiveThousand = () => {
    let sum = 0;
    for(var i=0;i<5001;i++){
        if(i%2!==0){
            sum+=i;
        }
    }
    return sum;
}
sumOddFiveThousand();

//4
const interateArr = arr => {
    let sum = 0;
    for(var i=0; i<arr.length; i++){
        sum+=arr[i];
    }
    return sum;
}
let x = [1,2,3,4,5];
interateArr(x);

//5
const findMax = arr => {
    let max = 0;
    for(var i=0;i<arr.length;i++){
        if(arr[i] > max){
            max = arr[i];
        }
    }
    return max;
}
let x = [1,2,3,4,5]
findMax(x);

//6
const findAverage = arr => {
    let sum = 0;
    for(var i=0;i<arr.length;i++){
        sum+=arr[i];
    }
    let avg = sum/arr.length;
    return avg;
}
let x = [1,2,3,4,5];
findAverage(x);

//7
const oddTo50 = () => {
    let oddarr = [];
    for(var i=1; i<51; i++){
        if(i%2!==0){
            oddarr.push(i);
        }
    }
    return oddarr;
}
oddTo50();

//8
const greaterThanY = (arr,y) => {
    let count = 0;
    for(var i=0;i<arr.length;i++){
        if(arr[i]>y){
            count+=1;
        }
    }
    return count;
}
let x = [1,2,3,4,5,6,7,8,9];
greaterThanY(x,3);

//9
const squareArr = arr => {
    for(var i=0;i<arr.length;i++){
        arr[i] = arr[i] * arr[i];
    }
    return arr;
}
let x = [1,2,3,4,5];
squareArr(x);

//10
const negativeZero = arr => {
    for(var i=0;i<arr.length;i++){
        if(arr[i] < 0){
            arr[i] = 0;
        }
    }
    return arr;
}
let x = [-1,-2,1,2,3,4,5];
negativeZero(x);

//11
const maxMinAvg = arr => {
    let max = arr[0];
    let min = arr[0];
    let sum = arr[0];
    for(var i=0;i<arr.length;i++){
        if(arr[i]>max){
            max = arr[i];
        } else if(arr[i]<min){
            min = arr[i];
        }
        sum += arr[i];
    }
    let maxminavg = [max,min,sum/arr.length];
    return maxminavg;
}
let x = [1,2,3,4,5,6,7,8,9];
maxMinAvg(x);

//12
const swapFirstLast = arr => {
    let temp = 0;
    temp = arr[0];
    arr[0] = arr[arr.length-1];
    arr[arr.length-1] = temp;
    return arr;
}
let x = [1,2,3,4,5];
swapFirstLast(x);

//13
const negativeToDojo = arr => {
    for(var i=0;i<arr.length;i++){
        if(arr[i] < 0){
            arr[i] = 'Dojo';
        }
    }
    return arr;
}
let x = [-1,-2,1,2,3,4,5,-3];
negativeToDojo(x);