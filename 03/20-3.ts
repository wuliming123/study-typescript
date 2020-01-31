// 泛型
function identity<T>(arg: T): T {
    return arg
}


// 报错
function loggingIdentity<T>(arg: T): T {
    console.log(arg.length)
    return arg
}

function loggingIdentity1<T>(arg: T[]): T[] {
    console.log(arg.length)
    return arg
}