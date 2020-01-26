// 枚举
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
var c = Color.Blue;
console.log(c);
var Color1;
(function (Color1) {
    Color1[Color1["Red"] = 1] = "Red";
    Color1[Color1["Green"] = 2] = "Green";
    Color1[Color1["Blue"] = 3] = "Blue";
})(Color1 || (Color1 = {}));
var colorName = Color1[2];
console.log(colorName);
var Color2;
(function (Color2) {
    Color2[Color2["Red"] = 1] = "Red";
    Color2[Color2["Green"] = 2] = "Green";
    Color2[Color2["Blue"] = 4] = "Blue";
})(Color2 || (Color2 = {}));
var colorName1 = Color2[3];
console.log(colorName1);
// any 好用但慎用 让ts不去检查
var notSure = 4;
notSure = 'maybe a string instead';
notSure = false;
var list = [1, true, 'free'];
list[1] = 100;
// void 函数返回值常用
function warnUser() {
    console.log('this is my waring message');
}
// let unusable: void // 没意义
// undefined 和 null
var u = undefined;
var n = null;
// never
function error(msg) {
    throw new Error(msg);
}
function fail() {
    return error('something failed');
}
function inifiniteloop() {
    while (true) {
    }
}
create({ prop: 0 });
create(null);
// 报错
create(42);
create('string');
create(false);
create(undefined);
// 类型断言
var someValue = 'this is a string';
// someValue.length
// let strLength: number = (<string>someValue).length // 强制转为
var strLength = someValue.length; // 断言
