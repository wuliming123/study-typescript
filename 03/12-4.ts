// 混合类型

interface Counter {
    (start: number): string

    interval: number

    reset(): void
}

function getCounter(): Counter {
    let counter = (function (start: number) {

    }) as Counter

    counter.interval = 123
    counter.reset = function () {
        console.log('我是reset方法')
    }

    return counter
}

/**
 * 这个变量c是一个函数类型
 * 但是它有属性比如 interval
 * 也有方法比如 reset()
 */
let c = getCounter()
c(10)

c.reset()
c.interval