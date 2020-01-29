// 抽象类 一般作为其他派生类的基类使用

abstract class Department {
    name: string

    constructor(name: string) {
        this.name = name
    }

    printName(): void {
        console.log('Department name : ' + this.name)
    }

    abstract printMeeting(): void
}

class AccountingDepartment extends Department {
    constructor() {
        super('Accounting ad Auditing');
    }

    printMeeting(): void {
        console.log('The Accounting Department meets each Monday at 10am.')
    }

    genterateReports(): void {
        console.log('Generating accounting reports...')
    }
}

let department: Department

// 报错： 不能实例化抽象类，只能实例化它的派生类
// department = new Department()

department = new AccountingDepartment()
department.printName()
department.printMeeting()

// 报错： 不能调用 因为变量department类型为Department
// 如果把它类型改为AccountingDepartment就可以调用了
// department.genterateReports()
