// 泛型

function identity(arg) {
    return arg
}

function identity1(arg: number): number{
    return arg
}

function identity2(arg: any): any{
    return arg
}

// 改变了
function identity3(arg: any): any{
    return arg + ''
}

// 这里使用一个类型变量 这就叫泛型
function identity4<T>(arg: T): T{
    return arg
}