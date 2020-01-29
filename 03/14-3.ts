// 类的修饰符
class Animal {
    private name: string

    constructor(name: string) {
        this.name = name
    }

    public move(distance: number = 0) {
        console.log(`${this.name} moved ${distance}m`)
    }
}

class Rhino extends Animal {
    constructor() {
        super('Rhino');
    }
}

class Employee {
    private name: string

    constructor(name: string) {
        this.name = name
    }
}

let animal = new Animal('Goat')
let rhino = new Rhino()
let employee = new Employee('Bob')

// 子类变量赋给父类变量 不报错，可以
animal = rhino

// 报错 类型不匹配，都是类，但类型不一样
animal = employee
