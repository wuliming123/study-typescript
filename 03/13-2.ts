// 类 的继承
class Animal {
    move(distance: number = 0) {
        console.log(`Animal moved ${distance}`)
    }
}

class Dog extends Animal {
    bark() {
        console.log('woof! woof!')
    }
}

const dog = new Dog()
dog.bark()
dog.move(10)
