// 类的静态属性

class Grid {
    static origin = {
        x: 0,
        y: 0
    }

    scale: number

    constructor(scale: number) {
        this.scale = scale
    }

    calculateDistanceFromOrigin(point: { x: number, y: number }) {
        // origin是Grid的静态属性，不是成员属性，所以用Grid.origin访问
        let xDist = point.x - Grid.origin.x
        let yDist = point.y - Grid.origin.y
        return Math.sqrt(xDist * xDist + yDist * yDist) * this.scale
    }
}

let grid1 = new Grid(1.0)
let grid2 = new Grid(5.0)
console.log(grid1.calculateDistanceFromOrigin({x: 3, y: 4}))
console.log(grid2.calculateDistanceFromOrigin({x: 3, y: 4}))

// 再次强调 这样使用静态属性
console.log(Grid.origin.x)
console.log(Grid.origin.y)
