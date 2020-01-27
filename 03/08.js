// 展开 或者 叫 扩展
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
// 数组
// let first = [1, 2]
// let second = [3, 4]
// let bothPlus = [0, ...first, ...second, 5]
// let bothPlus1 = [0,5, ...first, ...second]
// console.log(bothPlus)
// console.log(bothPlus1)
// 对象
var defaults = {
    food: 'spicy',
    price: '$10',
    ambiance: 'noisy'
};
var search = __assign(__assign({}, defaults), { food: 'rich' });
var search1 = __assign({ food: 'rich' }, defaults);
console.log(search);
console.log(search1);
