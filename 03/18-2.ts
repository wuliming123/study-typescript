// 可选参数，默认参数
// 可选参数必须跟在 必须参数后面，不能在前面
function buildName(firstName: string, lastName?: string): string {
    if (lastName) {
        return firstName + ' ' + lastName
    } else {
        return firstName
    }
}

//正确
let result1 = buildName('Bob')

// 正确
let result3 = buildName('Bob', 'Adams')