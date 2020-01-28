// 函数类型的接口
interface searchFunc {
    (source: string, subString: string): boolean
}

let mySearch: searchFunc
mySearch = function (src: string, sub: string): boolean {
    let result = src.search(sub)
    return result > -1
}



// 索引类型
interface StringArray {
    [index: number]: string
}
let myArray: StringArray
myArray = ['Bob', 'Fred']
let myStr: string = myArray[0]


class Animal {
    name: string
}
class Dog extends Animal{
    breed: string
}
interface NotOkay {
    [x: number] : Dog
    [x: string] : Animal
}


