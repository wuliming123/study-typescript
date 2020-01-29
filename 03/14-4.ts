

class Person {
    protected name: string

    constructor(name: string) {
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

console.log(howard.getElevatorPitch())

// 报错
console.log(howard.name)
