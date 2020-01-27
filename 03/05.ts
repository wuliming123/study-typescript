// 变量声明 let

// let hello = 'hjdsklafja';


// function f(input: boolean) {
//     let a = 100;
//     if (input) {
//         let b = a + 1;
//         return b;
//     }
//     return b; // 找不到b
// }


// try {
//     throw 'Oh no';
// } catch (e) {
//     console.log('catch it')
// }
// console.log(e) // 找不到e


// let a = 1
// a++


// 不能访问
// a++
// let a = 1


// tsc 05.ts 不报错，运行也不报错
// `tsc 05.ts --target es2015` 编译成es2015，编译不会报错，运行会报错
// function foo() {
//     return a;
// }
// foo();
// let a;

// function foo() {
//     return a;
// }
// let a;
// foo();


/*
// 报错
let x = 10
let x = 10

// 报错
function f(x) {
    let x;
}

// 报错
function g() {
    let x;
    let x;
}

// 不报错，取最后一个声明的
function f1(x) {
    var x;
    var x;
}*/


// function f(condition, x) {
//     if (condition) {
//         let x = 100;
//         return x;
//     }
//     return x;
// }
// f(false, 0); // 0
// f(true, 0); // 100


// 得到理想结果，但避免这样写， 还是建议把第二重循环里的i变成其他变量
// function sumMatrix(matrix: number[][]) {
//     let sum = 0;
//     for (let i = 0; i < matrix.length; i++) {
//         let currentRow = matrix[i];
//         for (let i = 0; i < currentRow.length; i++) {
//             sum += currentRow[i];
//         }
//     }
//     return sum;
// }
//
// let matrix = [
//     [1, 2, 3],
//     [4, 5, 6]
// ]
// console.log(sumMatrix(matrix))


// 输入十个10，上次的解决方案是利用一个立即执行函数，目的是创建一个新的变量环境
// for (var i = 0; i < 10; i++) {
//     setTimeout(function () {
//         console.log(i)
//     }, 100 * i)
// }

// 用let 秒解决
for (let i = 0; i < 10; i++) {
    setTimeout(function () {
        console.log(i)
    }, 100 * i)
}