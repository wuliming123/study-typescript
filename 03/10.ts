// 接口 可选属性，只读属性
/**

 interface Square {
    color: string,
    area: number
}
 // ?可选
 interface SquareConfig {
    color?: string,
    width?: number,
}
 function createSquare(config: SquareConfig): Square {
    let newSquare = {color: 'white', area: 100};
    if (config.color) {
        newSquare.color = config.color
    }
    if (config.width) {
        newSquare.area = config.width * config.width
    }
    return newSquare
}
 let mySquare = createSquare({color: 'black'})

 **/


// 只读
/**
 interface Point {
    readonly x: number
    readonly y: number
}

 let p1: Point = {x: 10, y: 20};
 p1.x = 5; // 报错， 只读

 **/


let a: number[] = [1, 2, 3, 4];
let ro: ReadonlyArray<number> = a;
ro[0] = 12 //报错
ro.push(5) // 报错
ro.length = 100 // 报错
a = ro // 报错
a = ro as number[] // 类型断言 不报错
