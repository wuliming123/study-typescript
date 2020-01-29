// 可选参数，默认参数
// 可选参数必须跟在 必须参数后面，不能在前面
function buildName(firstName: string = 'Will', lastName: string): string {
    return firstName + ' ' + lastName
}

// 报错
let result1 = buildName('Bob')

// 报错
let result2 = buildName('Bob', 'Adams', 'Sr.')

// 能取到默认值
let result3 = buildName(undefined, 'Adams')