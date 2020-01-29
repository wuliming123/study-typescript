// 可选参数，默认参数
function buildName(firstName: string, lastName: string): string {
    return firstName + ' ' + lastName
}

//报错
let result1 = buildName('Bob')

// 报错
let result2 = buildName('Bob', 'Adams', 'Sr.')

// 正确
let result3 = buildName('Bob', 'Adams')