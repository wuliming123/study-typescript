// 函数 类型 参数类型，返回值类型
function add(x: number, y: number): number {
    return x + y
}

// 报错 返回值类型不一致
function add1(x: number, y: number): number {
    return x + y + ''
}

let myAdd: (x: number, y: number) => number = function (x: number, y: number): number {
    return x + y
}

let myAdd1: (baseValue: number, increment: number) => number = function (x: number, y: number): number {
    return x + y
}

let myAdd2: (baseValue: number, increment: number) => number = function (x, y): number {
    return x + y
}
