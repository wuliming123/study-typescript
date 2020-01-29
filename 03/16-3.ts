// 修改静态属性的值

class Greeter {
    greeting: string
    static standardGreeting = 'hello, world!'

    constructor(msg?: string) {
        this.greeting = msg
    }

    greet() {
        if (this.greeting) {
            return 'Hello, ' + this.greeting
        } else {
            return Greeter.standardGreeting
        }
    }
}

let greeter: Greeter = new Greeter()
console.log(greeter.greet())


let greeterMaker: typeof Greeter = Greeter
greeterMaker.standardGreeting = 'Hey, world!'
let greeter2: Greeter = new greeterMaker()
console.log(greeter2.greet())
