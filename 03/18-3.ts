// 可选参数，默认参数
// 可选参数必须跟在 必须参数后面，不能在前面
function buildName(firstName: string, lastName: string = 'Smith'): string {
    return firstName + ' ' + lastName
}

let result1 = buildName('Bob', undefined)

// 报错
let result2 = buildName('Bob', 'Adams', 'Sr.')

let result3 = buildName('Bob', 'Adams')