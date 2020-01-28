function getCounter() {
    var counter = (function (start) {
    });
    counter.interval = 123;
    counter.reset = function () {
        console.log('我是reset方法');
    };
    return counter;
}
/**
 * 这个变量c是一个函数类型
 * 但是它有属性比如 interval
 * 也有方法比如 reset()
 */
var c = getCounter();
c(10);
c.reset();
c.interval;
