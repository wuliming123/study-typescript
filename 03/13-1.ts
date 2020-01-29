// 类
class Greeter {
    greeting: string

    constructor(msg: string) {
        this.greeting = msg
    }

    greet() {
        return 'Hello, ' + this.greeting
    }
}

let greeter = new Greeter('world')
greeter.greet()
