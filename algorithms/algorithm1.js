var x = [1,2,3,4,5,10]
for(var i=0; i<5;i++){   
   console.log(i);
}

// forloop starts at 0
// 0 is logged
// 0++
// 1 is logged
// 1++
// 2 is logged
// 2++
// 3 is logged
// 3++
// 4 is logged
// 4++
// 5 breaks the loop

var x = [1,2,3,4,5,10]
for(var i=0; i<5; i++)
{
   i = i + 1;  
   console.log(i);
}

// forloop starts at 0
// 0 = 0+1
// 1 is logged
// 1++
// 2 = 2+1
// 3 is logged
// 3++ 
// 4 = 4+1
// 5 is logged
// 5++
// 6 breaks the loop

var x = [1,2,3,4,5,10]
for(var i=0; i<5; i++)
{
   i = i + 3; 
   console.log(i);
}

// forloop starts at 0
// 0 = 0 + 3
// 3 is logged
// 3++
// 4 = 4 + 3 
// 7 is logged
// 7++
// 7 breaks look

// final yield = 
// 3
// 7

function y(num1, num2){    
    return num1+num2;
 }
 console.log(y(2,3))
 console.log(y(3,5))
 
 // line 4 will log y(2,3)
 // y(2,3) will return 2+3, which is logged by line 4
 
 // line 5 will log y(3,5)
 // y(3,5) will return 3+5, which is logged by line 5
 
 // final yield = 
 // 5
 // 8

function y(num1, num2){
    console.log(num1);   
    return num1+num2;
 }
 console.log(y(2,3))
 console.log(y(3,5))
 
 // line 5 will log y(2,3),
 // which logs 2
 // and returns 2+3, which is logged by line 5
 
 // line 6 will log y(3,5)
 // which logs 3
 // and returns 3+5, which is logged by line 6
 
 // final yield = 
 // 2
 // 5
 // 3
 // 8

a = 15;
console.log(a);
function y(a){
   console.log(a);   
   return a;
}
b = y(10);
console.log(b);

// line 2 will log 15
// line 8 will log y(10) which is,
// y(10) logs 10
// y(10) then returns 10, which is logged by line 8

// final yield = 
// 15
// 10
// 10

a = 15;
console.log(a);
function y(a){
   console.log(a);   
   return a*2;
}
b = y(10);
console.log(b);

// line 2 will log 15
// line 8 will log y(10),
// y(10) will log 10;
// y(10) return 10*2, which is then llogged by line 8. 

// final yield = 
// 15
// 10
// 20

