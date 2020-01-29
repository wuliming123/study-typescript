class Person {
    protected name: string

    protected constructor(name: string) {
        this.name = name
    }
}

class Employee extends Person {
    private department: string

    constructor(name: string, department: string) {
        super(name);
        this.department = department;
    }

    // 不加修饰符 默认public
    getElevatorPitch() {
        return `Hello, my name is ${this.name} and I work in ${this.department}.`
    }
}

let howard = new Employee('howard', 'Sales')

// 报错，不能被访问，只能在派生类中去访问
let john = new Person('John')