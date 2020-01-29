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

// 私有无法访问
(new Animal('Cat')).name


