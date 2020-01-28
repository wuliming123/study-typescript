// 接口

// function printLabel(labelledObj: { label: string }) {
//     console.log(labelledObj.label)
// }
// let myOjb = {size: 10, label: 'Size 10 Object'}
// printLabel(myOjb);


interface LabelledValue {
    label: string
}
function printLabel(labelledObj: LabelledValue) {
    console.log(labelledObj.label)
}
let myOjb = {size: 10, label: 'Size 10 Object'}
printLabel(myOjb);
let myOjb1 = {size: 10, label: 1}
printLabel(myOjb1);// 类不一致报错
let myOjb2 = {size: 10, name: '11111'}
printLabel(myOjb2);// 没有这个属性，报错