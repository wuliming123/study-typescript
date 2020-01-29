// 类的静态属性
var Grid = /** @class */ (function () {
    function Grid(scale) {
        this.scale = scale;
    }
    Grid.prototype.calculateDistanceFromOrigin = function (point) {
        // origin是Grid的静态属性，不是成员属性，所以用Grid.origin访问
        var xDist = point.x - Grid.origin.x;
        var yDist = point.y - Grid.origin.y;
        return Math.sqrt(xDist * xDist + yDist * yDist) * this.scale;
    };
    Grid.origin = {
        x: 0,
        y: 0
    };
    return Grid;
}());
var grid1 = new Grid(1.0);
var grid2 = new Grid(5.0);
console.log(grid1.calculateDistanceFromOrigin({ x: 3, y: 4 }));
console.log(grid2.calculateDistanceFromOrigin({ x: 3, y: 4 }));
// 再次强调 这样使用静态属性
console.log(Grid.origin.x);
console.log(Grid.origin.y);
