// 枚举
enum Color {
    Red,
    Green,
    Blue
}

let c: Color = Color.Blue
console.log(c)

enum Color1 {
    Red = 1,
    Green,
    Blue
}

let colorName: string = Color1[2]
console.log(colorName)

enum Color2 {
    Red = 1,
    Green = 2,
    Blue = 4
}

let colorName1: string = Color2[3]
console.log(colorName1)

// any 好用但慎用 让ts不去检查
let notSure: any = 4
notSure = 'maybe a string instead'
notSure = false

let list: any[] = [1, true, 'free']
list[1] = 100


// void 函数返回值常用
function warnUser(): void {
    console.log('this is my waring message')
}

// let unusable: void // 没意义

// undefined 和 null
let u: undefined = undefined
let n: null = null

// never
function error(msg: string): never {
    throw new Error(msg)
}

function fail() {
    return error('something failed')
}

function inifiniteloop(): never {
    while (true){

    }
}

// object
// declare 表示申明的意思
// 类型之间用 | 表示联合类型
declare function create(o: object | null): void;
create({prop: 0})
create(null)
// 报错
create(42)
create('string')
create(false)
create(undefined)

// 类型断言
let someValue: any = 'this is a string'
// someValue.length
// let strLength: number = (<string>someValue).length // 强制转为
let strLength: number = (someValue as string).length // 断言
