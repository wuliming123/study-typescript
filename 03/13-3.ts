// 类 的继承
class Animal {
    name: string

    constructor(name: string) {
        this.name = name
    }

    move(distance: number = 0) {
        console.log(`${this.name} moved ${distance}`)
    }
}

class Snake extends Animal {
    constructor(name: string) {
        super(name);
    }

    move(distance: number = 5) {
        console.log('蛇移动...');
        super.move(distance);
    }
}

class Horse extends Animal {
    constructor(name: string) {
        super(name);
    }

    move(distance: number = 45) {
        console.log('马快速奔跑...')
        super.move(distance);
    }
}

let sam = new Snake('Sammy')
let tom: Animal = new Horse('Tommy')
sam.move()
tom.move()