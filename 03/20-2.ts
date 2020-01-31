// 泛型
function identity<T>(arg: T): T{
    return arg
}

let output = identity<string>('myString')

// 类型推论 省略一部分
let output1 = identity('mySting')


