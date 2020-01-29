// 用这个代码编译： tsc 15-1.ts --target es5
// 存取器
var passCode = 'Secret1 passcode';
var Employee = /** @class */ (function () {
    function Employee() {
    }
    Object.defineProperty(Employee.prototype, "fullName", {
        get: function () {
            return this._fullName;
        },
        set: function (newName) {
            if (passCode && passCode === 'Secret passcode') {
                this._fullName = newName;
            }
            else {
                console.log('Error：Unauthorized update of employee!');
            }
        },
        enumerable: true,
        configurable: true
    });
    return Employee;
}());
var employee = new Employee();
employee.fullName = 'Bob Smith';
if (employee.fullName) {
    console.log(employee.fullName);
}
