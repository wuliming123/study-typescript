// 类的修饰符
class Animal {
    public name: string

    constructor(name: string) {
        this.name = name
    }

    public move(distance: number = 0) {
        console.log(`${this.name} moved ${distance}m`)
    }
}


