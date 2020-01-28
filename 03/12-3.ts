// 接口继承接口

/**
 * 例1
 */
interface Shape {
    color: string
}

interface Square extends Shape {
    sideLength: number
}

let square = {} as Square
square.color = 'blue'
square.sideLength = 10


/**
 * 例2
 */
interface Shape1 {
    color: string
}

interface PenStroke {
    penWidth: number
}

interface Square1 extends Shape1, PenStroke {
    sideLength: number
}

let square1 = {} as Square1
square1.color = 'blue'
square1.sideLength = 10
square1.penWidth = 5.0
