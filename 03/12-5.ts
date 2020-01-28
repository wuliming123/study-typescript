// 接口继承类


class Control {
    private state: any
}

/**
 * 接口继承类
 * 会继承这个类上的私有成员
 */
interface SelectableControl extends Control {
    select()
}

/**
 * 实现了 SelectableControl 接口
 * 实现了select方法
 */
class Button extends Control implements SelectableControl {
    select() {

    }
}

/**
 * 未实现 SelectableControl 接口
 * 也可以定义这个月一个select方法
 */
class TextBox extends Control {
    select() {

    }
}

/**
 * 报错
 * 未继承 Control 类，去实现一个继承 Control 类的接口
 */
class ImageC implements SelectableControl {
    select() {

    }
}
