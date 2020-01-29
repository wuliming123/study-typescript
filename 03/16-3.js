// 修改静态属性的值
var Greeter = /** @class */ (function () {
    function Greeter(msg) {
        this.greeting = msg;
    }
    Greeter.prototype.greet = function () {
        if (this.greeting) {
            return 'Hello, ' + this.greeting;
        }
        else {
            return Greeter.standardGreeting;
        }
    };
    Greeter.standardGreeting = 'hello, world!';
    return Greeter;
}());
var greeter = new Greeter();
console.log(greeter.greet());
var greeterMaker = Greeter;
greeterMaker.standardGreeting = 'Hey, world!';
var greeter2 = new greeterMaker();
console.log(greeter2.greet());
