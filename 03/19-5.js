var Handler = /** @class */ (function () {
    function Handler() {
        var _this = this;
        this.onClickBad = function (e) {
            _this.type = e.type; // 这儿又会报错
        };
    }
    return Handler;
}());
var h = new Handler();
var uiElement = {
    addClickListener: function () {
    }
};
// 编译不通过
uiElement.addClickListener(h.onClickBad);
