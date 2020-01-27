// 解构 数组和对象
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
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
var o = {
    a: 'foo',
    b: 12,
    c: 'bar'
};
var a = o.a, passthrough = __rest(o, ["a"]);
var total = passthrough.b + passthrough.c.length;
console.log(total);
