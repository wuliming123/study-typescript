// 用这个代码编译： tsc 15-1.ts --target es5
// 存取器
let passCode = 'Secret passcode'

class Employee {
    private _fullName: string

    get fullName(): string {
        return this._fullName
    }

    set fullName(newName: string) {
        if (passCode && passCode === 'Secret passcode') {
            this._fullName = newName
        } else {
            console.log('Error：Unauthorized update of employee!')
        }
    }
}

let employee = new Employee()
employee.fullName = 'Bob Smith'
if (employee.fullName) {
    console.log(employee.fullName)
}