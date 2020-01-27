// function greeter(person) {
//     return 'Hello ' + person
// }
// let user = 'Yee'
// console.log(greeter(user))
// function greeter(person: string) {
//     return 'Hello ' + person
// }
// let user = [0, 1, 2]
// console.log(greeter(user)) // 编译时类型报错，但能编译成js
// function greeter(person: string) {
//     return 'Hello ' + person
// }
// let user = 'Yee'
// console.log(greeter(user, 1))
// interface Person {
//     firstName: string
//     lastName: string
// }
// function greeter(person: Person) {
//     return 'Hello ' + person.firstName + ' ' + person.lastName
// }
// let user  = {
//     firstName: 'Yee',
//     lastName: 'Huang'
// }
// console.log(greeter(user))
// interface Person {
//     firstName: string
//     lastName: string
// }
// function greeter(person: Person) {
//     return 'Hello ' + person.firstName + ' ' + person.lastName
// }
// let user: Person = {
//     firstName: 'Yee',
//     lastName: 'Huang'
// }
// console.log(greeter(user))
var User = /** @class */ (function () {
    function User(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.fullName = firstName + ' ' + lastName;
    }
    return User;
}());
function greeter(person) {
    return 'Hello ' + person.firstName + ' ' + person.lastName;
}
var user = new User('Wu', 'Liming');
console.log(user);
console.log(greeter(user));
