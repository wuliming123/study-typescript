// 变量声明 var


// var a = 10;


// function f() {
//     var msg = 'hello world';
//     return msg
// }


// function f1() {
//     var a = 10;
//     return function g() {
//         var b = a + 1;
//         return b;
//     }
// }
// var g = f1();
// g();


// function f(shouldInitialize) {
//     if (shouldInitialize) {
//         var x = 10;
//     }
//     return x;
// }
// f(true); // 10
// f(false); // undefined


// function sumMatrix(matrix) {
//     var sum = 0;
//     for (var i = 0; i < matrix.length; i++) {
//         var currentRow = matrix[i];
//         for (var i = 0; i < currentRow.length; i++) {
//             sum += currentRow[i];
//         }
//     }
//     return sum;
// }
// var matrix = [
//     [1, 2, 3],
//     [4, 5, 6]
// ];
// console.log(sumMatrix(matrix)); //结果不是预期，i会被覆盖, 把第二个循环里的i改成j就ok了

// 输入十个10 非预期
// for (var i = 0; i < 10; i++) {
//     setTimeout(function () {
//         console.log(i);
//     }, 100 * i);
// }

//解决方案
// for (var i = 0; i < 10; i++) {
//     (function (i) {
//         setTimeout(function () {
//             console.log(i);
//         }, 100 * i);
//     })(i);
// }

// for (var i = 0; i < 10; i++) {
//     (function (j) {
//         setTimeout(function () {
//             console.log(j);
//         }, 100 * j);
//     })(i);
// }