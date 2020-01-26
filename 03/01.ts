// 布尔值
let isDone: boolean = false;

// 数字 支持进制
let decLiteral: number = 20; // 十进制
let hexLiteral: number = 0x14;
let binaryLiteral: number = 0b10100;
let octalLiteral: number = 0o24;

// 字符串
let name: string = 'bob';
// name = "smith";
let age: number = 18;
let sentence = `Hello，my name is ${name}.


I'll be ${age + 1} years old next month.
`;
// let sentence = 'Hello，my name is ' + name + '.\n\nI\'ll be ' + (age + 1) + ' years old next month.';

// 数组
let list: number[] = [1, 2, 3];
// let list: Array<number> = [1, 2, 3];

// 元组
let x: [string, number];
x = ['hello', 10];
console.log(x[0].substring(1))
