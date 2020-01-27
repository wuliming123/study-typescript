// 展开 或者 叫 扩展

// 数组
// let first = [1, 2]
// let second = [3, 4]
// let bothPlus = [0, ...first, ...second, 5]
// let bothPlus1 = [0,5, ...first, ...second]
// console.log(bothPlus)
// console.log(bothPlus1)


// 对象
let defaults = {
    food: 'spicy',
    price: '$10',
    ambiance: 'noisy'
};
let search = {...defaults, food: 'rich'};
let search1 = {food: 'rich', ...defaults};
console.log(search);
console.log(search1);