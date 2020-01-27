// 元组长度越界 报错 ts3.1以前不会出现这个报错
var x;
x = ['hello', 10];
x[3] = 'world';
