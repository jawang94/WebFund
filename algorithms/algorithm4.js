//Algorithm IV
//1
function greaterThanY(arr, y) {
    let count = 0;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > y) {
            count += 1;
        }
    }
    console.log(count);
}
let arr = [1, 2, 3, 4, 5];
let y = 3;

//2
function maxMinAvg(arr) {
    let max = 0;
    let min = 0;
    let sum = 0;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        } else if (arr[i] < min) {
            min = arr[i]
        }
        sum += arr[i];
    }
    console.log(max);
    console.log(min);
    console.log(sum / arr.length);
}

let arr = [1, 2, 3, 4, 5];
maxMinAvg(arr);

//3
const negDojo = arr => {
    let newarr = [];
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] < 0) {
            arr[i] = 'Dojo';
        }
        newarr.push(arr[i]);
    }
    return newarr;
}

let x = [1, 2, -3, 4, -1, 5, -2, 6];
console.log(negDojo(x));

//4
const removeRange = (arr, x, y) => {
    let newarr = [];
    for (var i = 0; i < arr.length; i++) {
      if(i < x || i > y)
      newarr.push(arr[i]);
    }
    return newarr;
  }
  
  let testarr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  let start = 3;
  let end = 6;
  removeRange(testarr, start, end);