// 抽象类 一般作为其他派生类的基类使用

// abstract 关键字标识Animal是一个抽象类
abstract class Animal {
    // abstract 抽象方法，一般在派生类中实现
    public abstract makeSound(): void

    protected abstract makeSound1(): void

    move(): void {
        console.log('roaming the eartch...')
    }
}
