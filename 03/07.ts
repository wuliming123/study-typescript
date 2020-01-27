// 解构 数组和对象

// let input = [1, 2];
// let [first, second] = input;
// 等价于
// let first = input[0], second = input[1];

// let input = [1, 2];
// function f([first, second]: [number, number]) {
//     console.log(first);
//     console.log(second);
// }
// f(input); // 报错，数组传个一个元组

// 不报错
// let input: [number, number] = [1, 2];
// function f([first, second]: [number, number]) {
//     console.log(first)
//     console.log(second)
// }
// f(input)

// let [first, ...rest] = [1, 2, 3, 4];
// console.log(first);
// console.log(rest);

// let [first] = [1, 2, 3, 4];
// console.log(first);

// let [, second, , fourth] = [1, 2, 3, 4];
// console.log(second);
// console.log(fourth);

// 对象解构

// let o = {
//     a: 'foo',
//     b: 12,
//     c: 'bar'
// };
// let {a, c} = o;
// console.log(a);
// console.log(c);

// let o = {
//     a: 'foo',
//     b: 12,
//     c: 'bar'
// };
// let {a, ...passthrough} = o;
// let total  = passthrough.b + passthrough.c.length
// console.log(total);


// let o = {
//     a: 'foo',
//     b: 12,
//     c: 'bar'
// };
// let {a: newName1, b: newName2} = o
// 等价于
// let newName1 = o.a
// let newName2 = o.b


// let o = {
//     a: 'foo',
//     b: 12,
//     c: 'bar'
// };
// let {a, b}: { a: string, b: number } = o


// function keepWholeObject(wholeObject: { a: string, b?: number }) {
//     let {a, b = 1001} = wholeObject
// }

// type C = { a: string, b?: number };
// function f({a, b}: C): void {
//
// }

// 默认值
// function f({a = '', b = 0} =  {}): void {
//
// }

// 这儿的解构表达式就比较复杂，不建议滥用解构表达式
function f({a, b = 0} =  {a: ''}): void {

}
f({a: 'yes'}); // 这样传可行
f();// 这样传可行
f({});// 这样传报错，类型不匹配