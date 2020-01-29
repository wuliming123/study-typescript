class Person {
    readonly name: string

    constructor(name: string) {
        this.name = name
    }
}

let john = new Person('John')

// 报错，因为是只读，不能修改
john.name = 'sdsadfasd'
