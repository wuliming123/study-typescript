// 接口
function printLabel(labelledObj) {
    console.log(labelledObj.label);
}
var myOjb = { size: 10, label: 'Size 10 Object' };
printLabel(myOjb);
var myOjb1 = { size: 10, label: 1 };
printLabel(myOjb1); // 类不一致报错
var myOjb2 = { size: 10, name: '11111' };
printLabel(myOjb2); // 没有这个属性，报错
